import * as THREE from "three";
import { Sky } from "three/addons/objects/Sky.js";
import { loadTextures } from "./texture-loader";
//Planets
import { CreatePlanetOne, CreatePlanetTwo } from "./planet-one";

import star2Url from "../../assets/9.png";
const paths = {
  start_two: star2Url,
};

const textures = loadTextures(paths);
const stars_parameters = {
  amount: 2000,
  size: 0.03,
};
const star_proximity = 4;

function createStars() {
  const stars_geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(stars_parameters.amount * 3);
  for (let count = 0; count < stars_parameters.amount; count++) {
    const index = count * 3;
    positions[index] = (Math.random() * 2 - 1) * star_proximity;
    positions[index + 1] = (Math.random() * 2 - 1) * star_proximity;
    positions[index + 2] = (Math.random() * 2 - 1) * star_proximity;
  }
  stars_geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  const material = new THREE.PointsMaterial({
    size: stars_parameters.size,

    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,

    alphaMap: textures.start_two,
    color: "white",
  });
  return new THREE.Points(stars_geometry, material);
}

export function createSky() {
  const sky_group = new THREE.Group();
  sky_group.add(createStars());
  sky_group.add(CreatePlanetOne());
  sky_group.add(CreatePlanetTwo());
  return sky_group;
}
