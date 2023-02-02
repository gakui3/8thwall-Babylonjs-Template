import * as BABYLON from "babylonjs";

const initXrScene = ({scene, camera}) => {
  // Light.
  const light = new BABYLON.DirectionalLight(
    "light",
    new BABYLON.Vector3(-5, -10, 7),
    scene
  );
  light.intensity = 0.0;
  // Cube.
  const box = BABYLON.MeshBuilder.CreateBox("box", {size: 2.0}, scene);
  box.material = new BABYLON.StandardMaterial("boxMaterial", scene);
  box.material.emissiveColor = new BABYLON.Color3.FromHexString("#AD50FF");
  box.position = new BABYLON.Vector3(0, 0.5, 2);

  camera.position = new BABYLON.Vector3(0, 2, -2);
};

export const startScene = (canvas) => {
  const engine = new BABYLON.Engine(canvas, true /* antialias */);
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.FreeCamera(
    "camera",
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  initXrScene({scene, camera});
  // Connect camera to XR and show camera feed
  camera.addBehavior(window.XR8.Babylonjs.xrCameraBehavior(), true);
  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", () => engine.resize());
};
