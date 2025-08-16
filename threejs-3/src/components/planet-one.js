import * as THREE from "three";
import { loadTextures } from "./texture-loader";
//reason why import wasn't working from ../assets/planet_one/rocks_ground_02_col_1k.jpg/rocks_ground_02_col_1k.jpg was because the
//folder was too long, like this file is already in Documents/Proejcts/Threejs-3/threejs-3 so it can't be too long.

//
import PlanetOneImg from "../../assets/planet_one/rocks_ground_02_col_1k.jpg";
import PlanetOneNormalImg from "../../assets/planet_one/rocks_ground_02_nor_gl_1k.jpg";
import PlanetOneArmImg from "../../assets/planet_one/rocks_ground_02_arm_1k.jpg";
import PlanetOneDisImg from "../../assets/planet_one/rocks_ground_02_height_1k.jpg";
const paths = {
  planetOne: PlanetOneImg,
  planetOneArm: PlanetOneArmImg,
  planetOneNor: PlanetOneNormalImg,
  planetOneDis: PlanetOneDisImg,
};
const textures = loadTextures(paths);
textures.planetOne.colorSpace = THREE.SRGBColorSpace;
// Apply repeating settings to all textures
// Object.values(textures).forEach((tex) => {
//   if (!tex) return;
//   tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
//   tex.repeat.set(4, 1); // 4× around horizontally, 1× pole-to-pole vertically
//   // tex.repeat.set(4, 4); // Alternative: tile vertically too (may look messy at poles)
// });

export function CreatePlanetOne() {
  const planet_one = new THREE.SphereGeometry(0.25);
  const planet_one_material = new THREE.MeshStandardMaterial({
    map: textures.planetOne,
    aoMap: textures.planetOneArm,
    roughnessMap: textures.planetOneArm,
    metalnessMap: textures.planetOneArm,
    normalMap: textures.planetOneNor,
  });

  const planet_one_mesh = new THREE.Mesh(planet_one, planet_one_material);
  planet_one_mesh.position.set(-1, -1, 0);
  return planet_one_mesh;
}

export function CreatePlanetTwo() {
  const sun = new THREE.SphereGeometry(0.25);
  const sun_material = new THREE.MeshStandardMaterial({
    color: "yellow",
  });
  const sun_mesh = new THREE.Mesh(sun, sun_material);
  sun_mesh.position.set(1, 1, 0);
  return sun_mesh;
}
