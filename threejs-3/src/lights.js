import * as THREE from "three";

export function createAmberLights(scene) {
  const ambient = new THREE.AmbientLight("white", 2);
  scene.add(ambient);
}

export function createHemiSphereLightOne(scene) {
  const planet_one_hemisphere_light = new THREE.HemisphereLight(
    "blue",
    "purple",
    3
  );
  planet_one_hemisphere_light.position.set(-1, -1, 0);
  scene.add(planet_one_hemisphere_light);
  const hemisphereLightHelper = new THREE.HemisphereLightHelper(
    planet_one_hemisphere_light,
    0.5
  );
  scene.add(hemisphereLightHelper);
}

export function createPointLightOne(scene) {
  const sun = new THREE.PointLight("yellow", 2, 1, 2);
  sun.position.set(1, 1, 0);
  scene.add(sun);
  const pointLightHelper = new THREE.PointLightHelper(sun, 0.2);
  scene.add(pointLightHelper);
}
