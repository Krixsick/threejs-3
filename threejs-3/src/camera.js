import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createPerspectiveCamera(width, height) {
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
  camera.position.set(1, 1, 1);
  return camera;
}

export function createOrbitControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  return controls;
}
