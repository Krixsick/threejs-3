import * as THREE from "three";
import { createPerspectiveCamera, createOrbitControls } from "./camera.js";
import {
  createAmberLights,
  createHemiSphereLightOne,
  createPointLightOne,
} from "./lights.js";
import { fullGalaxyScene } from "./components/floor.js";

//Canvas and scene
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//Cameras
const camera = createPerspectiveCamera(window.innerWidth, window.innerHeight);
const orbit_controls = createOrbitControls(camera, canvas);
//Lights
createAmberLights(scene);
createHemiSphereLightOne(scene);
createPointLightOne(scene);
//Objects
scene.add(fullGalaxyScene());
//Animation
const tick = () => {
  orbit_controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};
tick();
