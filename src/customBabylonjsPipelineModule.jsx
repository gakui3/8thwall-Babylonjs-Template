import React from "react";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";
import SceneComponent from "./components/SceneComponent";

const BabylonScene = () => {
  let box;

  const onSceneReady = (scene) => {
    const camera = new FreeCamera("cam", new Vector3(0, 0, 0), scene);
    camera.position = new BABYLON.Vector3(0, 0, -5);

    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();
    camera.attachControl(canvas, true);
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    box = MeshBuilder.CreateBox("box", {size: 2}, scene);
    box.position.y = 1;

    camera.addBehavior(XR8.Babylonjs.xrCameraBehavior(), true);
    console.log(XR8.Babylonjs);
    MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
  };

  const onRender = (scene) => {
    if (box !== undefined) {
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();

      const rpm = 10;
      box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  };

  return (
    <div>
      <SceneComponent
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="my-canvas"
      />
    </div>
  );
};

export default BabylonScene;
