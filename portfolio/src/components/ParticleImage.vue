<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let particles: THREE.Points;
let geometry: THREE.BufferGeometry;
let animationFrameId: number;

// Interaction state
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

// Mouse movement for particle interaction
let mouseX = 0;
let mouseY = 0;
let targetMouseX = 0;
let targetMouseY = 0;

// Visible dimensions at z=0
let visibleWidth = 0;
let visibleHeight = 0;

const updateVisibleDimensions = () => {
  if (!camera) return;
  const fovRad = camera.fov * Math.PI / 180;
  visibleHeight = 2 * Math.tan(fovRad / 2) * camera.position.z;
  visibleWidth = visibleHeight * camera.aspect;
};

const init = () => {
  if (!container.value) return;

  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 300;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.value.appendChild(renderer.domElement);

  updateVisibleDimensions();

  loadImageAndCreateParticles();

  window.addEventListener('resize', onWindowResize);
  
  // Interaction events
  const dom = renderer.domElement;
  dom.addEventListener('mousedown', onMouseDown);
  dom.addEventListener('mousemove', onMouseMove);
  dom.addEventListener('mouseup', onMouseUp);
  dom.addEventListener('mouseleave', onMouseUp);
  
  // Touch events
  dom.addEventListener('touchstart', onTouchStart, { passive: false });
  dom.addEventListener('touchmove', onTouchMove, { passive: false });
  dom.addEventListener('touchend', onTouchEnd);

  animate();
};

const loadImageAndCreateParticles = () => {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  const imageUrl = "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAERUklponbJyA3krLmdkwk9jN-IgdbYHwAClBsAAgdJGFXIpMPVH3nhkDoE.png";
  
  // Try codetabs proxy first
  img.src = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(imageUrl)}`;
  
  let fallbackAttempted = 0;
  img.onerror = () => {
    if (fallbackAttempted === 0) {
      console.error("Failed to load image via codetabs proxy. Trying allorigins...");
      fallbackAttempted++;
      img.src = `https://api.allorigins.win/raw?url=${encodeURIComponent(imageUrl)}`;
    } else if (fallbackAttempted === 1) {
      console.error("Failed to load image via allorigins proxy. Trying corsproxy.io...");
      fallbackAttempted++;
      img.src = `https://corsproxy.io/?${encodeURIComponent(imageUrl)}`;
    } else if (fallbackAttempted === 2) {
      console.error("Failed to load image via corsproxy.io. Trying direct load...");
      fallbackAttempted++;
      img.src = imageUrl;
    } else {
      console.error("Failed to load image completely. Please check the image URL or CORS settings.");
    }
  };
  
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adjust resolution for performance vs quality
    const imgWidth = 800; // Increased significantly for HD density
    const imgHeight = Math.floor((img.height / img.width) * imgWidth);
    
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
    
    const imgData = ctx.getImageData(0, 0, imgWidth, imgHeight).data;
    
    // Calculate scale to cover the screen
    const scale = Math.max(visibleWidth / imgWidth, visibleHeight / imgHeight);
    
    geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const sizes = [];
    const alphas = []; // New array for alpha/opacity
    const originalPositions = [];

    // Calculate max radius for edge fading
    const maxRadius = Math.min(imgWidth, imgHeight) / 2;

    for (let y = 0; y < imgHeight; y++) {
      for (let x = 0; x < imgWidth; x++) {
        const index = (y * imgWidth + x) * 4;
        const r = imgData[index] / 255;
        const g = imgData[index + 1] / 255;
        const b = imgData[index + 2] / 255;
        const a = imgData[index + 3] / 255;

        if (a > 0.1) {
          // Calculate luminance for subtle depth
          const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

          // Center the image and scale to cover screen
          const dx = x - imgWidth / 2;
          const dy = y - imgHeight / 2;
          let posX = dx * scale;
          let posY = -dy * scale;
          
          // Subtle undulation based on luminance
          let posZ = (luminance - 0.5) * visibleWidth * 0.08;

          // Calculate rectangular distance with irregular noise
          const normalizedX = Math.abs(dx) / (imgWidth / 2);
          const normalizedY = Math.abs(dy) / (imgHeight / 2);
          
          // Multi-frequency noise for torn edges
          const noise = (Math.sin(x * 0.05) * Math.cos(y * 0.05) + Math.sin((x + y) * 0.02)) * 0.08;
          const edgeFactor = Math.max(normalizedX, normalizedY) + noise;
          
          let alpha = 1.0;
          // Increase size multiplier to ensure particles overlap and form a solid, bright image
          let size = scale * 1.8; 

          // Thresholds for the irregular rectangular effect
          const solidZone = 0.65; 
          const edgeZone = 0.90;  

          if (edgeFactor > solidZone) {
            // Calculate how far into the dispersion zone we are (0.0 to 1.0)
            const scatterFactor = (edgeFactor - solidZone) / (1.0 - solidZone);
            const smoothScatter = Math.pow(scatterFactor, 2.0); // Steeper curve for dramatic edges

            // 1. Z-Dispersion: Push particles towards the viewer to form a "cave/portal"
            const maxZScatter = visibleWidth * 0.2;
            // Random scatter, biased towards the camera (positive Z)
            posZ += (Math.random() - 0.5) * maxZScatter * smoothScatter;

            // 2. XY-Dispersion: Break the grid structure
            const maxXYScatter = scale * 40.0;
            posX += (Math.random() - 0.5) * maxXYScatter * smoothScatter;
            posY += (Math.random() - 0.5) * maxXYScatter * smoothScatter;

            // 3. Size variation: Edges become smaller, dust-like
            size = (scale * 1.8) - (scale * 1.2 * smoothScatter);

            // 4. Alpha fading at the very edges
            if (edgeFactor > edgeZone) {
              alpha = 1.0 - (edgeFactor - edgeZone) / (1.0 - edgeZone);
              alpha = Math.max(0, alpha);
            }
          }

          if (alpha > 0.05) {
            positions.push(posX, posY, posZ);
            originalPositions.push(posX, posY, posZ);
            colors.push(r, g, b);
            sizes.push(size);
            alphas.push(alpha);
          }
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('alpha', new THREE.Float32BufferAttribute(alphas, 1));
    geometry.setAttribute('originalPosition', new THREE.Float32BufferAttribute(originalPositions, 3));

    // Custom shader material for particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        attribute vec3 color;
        attribute float size;
        attribute float alpha;
        attribute vec3 originalPosition;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          vAlpha = alpha;
          vec3 pos = position;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          // Circular particle with soft edge
          float dist = distance(gl_PointCoord, vec2(0.5));
          if (dist > 0.5) discard;
          
          // Keep the center of the particle fully opaque to maintain brightness
          float particleAlpha = smoothstep(0.5, 0.4, dist) * vAlpha;
          
          gl_FragColor = vec4(vColor, particleAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  };
};

const onWindowResize = () => {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  updateVisibleDimensions();
};

// Interaction Handlers
const onMouseDown = (e: MouseEvent) => {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
};

const onMouseMove = (e: MouseEvent) => {
  // Update mouse position for shader
  const rect = renderer.domElement.getBoundingClientRect();
  targetMouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  targetMouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  
  // Convert to world coordinates
  targetMouseX *= visibleWidth / 2; 
  targetMouseY *= visibleHeight / 2;

  if (isDragging) {
    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };

    targetRotation.x += deltaMove.y * 0.005;
    targetRotation.y += deltaMove.x * 0.005;

    // Allow 360 degree horizontal rotation, limit vertical to avoid flipping
    const maxPitch = 85 * (Math.PI / 180);
    targetRotation.x = Math.max(-maxPitch, Math.min(maxPitch, targetRotation.x));
    // targetRotation.y is not clamped to allow 360 rotation

    previousMousePosition = { x: e.clientX, y: e.clientY };
  }
};

const onMouseUp = () => {
  isDragging = false;
};

// Touch support
const onTouchStart = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    isDragging = true;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
};

const onTouchMove = (e: TouchEvent) => {
  e.preventDefault(); // Prevent scrolling
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    
    const rect = renderer.domElement.getBoundingClientRect();
    targetMouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    targetMouseY = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    targetMouseX *= visibleWidth / 2; 
    targetMouseY *= visibleHeight / 2;

    if (isDragging) {
      const deltaMove = {
        x: touch.clientX - previousMousePosition.x,
        y: touch.clientY - previousMousePosition.y
      };

      targetRotation.x += deltaMove.y * 0.005;
      targetRotation.y += deltaMove.x * 0.005;

      const maxPitch = 85 * (Math.PI / 180);
      targetRotation.x = Math.max(-maxPitch, Math.min(maxPitch, targetRotation.x));
      // targetRotation.y is not clamped

      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    }
  }
};

const onTouchEnd = () => {
  isDragging = false;
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  // Smooth rotation interpolation
  currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
  currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;

  if (particles) {
    particles.rotation.x = currentRotation.x;
    particles.rotation.y = currentRotation.y;
    
    // Smooth mouse interpolation
    mouseX += (targetMouseX - mouseX) * 0.1;
    mouseY += (targetMouseY - mouseY) * 0.1;
    
    // CPU side particle update for interaction
    const positions = geometry.attributes.position.array as Float32Array;
    const originalPositions = geometry.attributes.originalPosition.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const ox = originalPositions[i];
      const oy = originalPositions[i + 1];
      const oz = originalPositions[i + 2];

      const px = positions[i];
      const py = positions[i + 1];
      const pz = positions[i + 2];

      // Transform mouse coordinates to local particle space considering rotation
      // For simplicity, we just use the raw mouseX/mouseY which is an approximation
      const dx = ox - mouseX;
      const dy = oy - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const maxDist = visibleWidth * 0.06; // Interaction radius based on screen size (halved)
      
      let targetX = ox;
      let targetY = oy;
      let targetZ = oz;

      if (dist < maxDist) {
        // Create a "void" or "hole" effect by pushing particles strongly away
        const force = Math.pow((maxDist - dist) / maxDist, 1.2); 
        const angle = Math.atan2(dy, dx);
        
        const pushStrength = visibleWidth * 0.04; // Strong push to create a hole (halved)
        targetX = ox + Math.cos(angle) * force * pushStrength;
        targetY = oy + Math.sin(angle) * force * pushStrength;
        targetZ = oz + force * pushStrength * 0.5;
      }

      // Interpolate back to target
      positions[i] += (targetX - px) * 0.1;
      positions[i + 1] += (targetY - py) * 0.1;
      positions[i + 2] += (targetZ - pz) * 0.1;
    }
    geometry.attributes.position.needsUpdate = true;
    
    const material = particles.material as THREE.ShaderMaterial;
    material.uniforms.uMouse.value.set(mouseX, mouseY);
    material.uniforms.uTime.value += 0.05;
  }

  renderer.render(scene, camera);
};

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', onWindowResize);
  if (renderer) {
    renderer.dispose();
  }
  if (geometry) {
    geometry.dispose();
  }
});
</script>

<template>
  <div ref="container" class="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"></div>
</template>
