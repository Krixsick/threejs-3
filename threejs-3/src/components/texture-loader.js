import * as THREE from "three";

export function loadTextures(list_of_textures) {
  const loader = new THREE.TextureLoader();
  return Object.fromEntries(
    Object.entries(list_of_textures).map(([key, url]) => {
      const tex = loader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      return [key, tex]; // <-- gets folded back into an object
    })
  );
}
