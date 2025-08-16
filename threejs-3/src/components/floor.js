import * as THREE from "three";
import { createSky } from "./sky.js";

export function fullGalaxyScene() {
  const galaxy_group = new THREE.Group();
  galaxy_group.add(createSky());
  return galaxy_group;
}
