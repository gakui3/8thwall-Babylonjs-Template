import * as BABYLON from "babylonjs";

export const customBabylonjsPipelineModule = () => {
  //setup
  const canvas = document.getElementById("camerafeed");
  const engine = new BABYLON.Engine(canvas, true /* antialias */);
  engine.enableOfflineSupport = false;

  //scene
  const scene = new BABYLON.Scene(engine);

  //camera
  const camera = new BABYLON.FreeCamera(
    "cam",
    new BABYLON.Vector3(0, 0, 0),
    scene
  );
  camera.position = new BABYLON.Vector3(0, 0, -5);

  //light
  const light = new BABYLON.DirectionalLight(
    "light",
    new BABYLON.Vector3(-5, -10, 7),
    scene
  );
  light.intensity = 1.0;

  //box
  const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1.5}, scene);
  box.material = new BABYLON.StandardMaterial("boxMaterial", scene);
  box.material.emissiveColor = new BABYLON.Color3.FromHexString("#AD50FF");
  box.position = new BABYLON.Vector3(0, 1, 4);

  //for 8thwall
  camera.addBehavior(XR8.Babylonjs.xrCameraBehavior(), true);

  engine.runRenderLoop(() => scene.render());
  window.addEventListener("resize", () => engine.resize());

  return {
    name: "customthreejs",
    onStart: () => {},
    onAttach: () => {},
  };
};
