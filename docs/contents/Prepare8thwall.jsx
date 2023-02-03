import React, {useState, useEffect} from "react";
import {GameScene} from "./GameScene";

export const Prepare8thwall = () => {
  const [ready, setReady] = useState(false);
  const [color, setColor] = useState({r: 1.0, g: 1.0, b: 1.0});

  const onxrloaded = () => {
    XR8.XrController.configure();

    XR8.addCameraPipelineModules([
      XRExtras.AlmostThere.pipelineModule(),
      XRExtras.Loading.pipelineModule(),
      XRExtras.RuntimeError.pipelineModule(),
      XRExtras.FullWindowCanvas.pipelineModule(),
    ]);

    document.body.insertAdjacentHTML(
      "beforeend",
      '<canvas id="camerafeed"></canvas>'
    );

    setReady(true);
  };

  const stop = () => {
    const canvas = document.getElementById("camerafeed");
    canvas.parentNode.removeChild(canvas);
    XR8.stop();
    XR8.clearCameraPipelineModules();
  };

  useEffect(() => {
    window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
  }, []);

  if (ready) {
    return (
      <>
        <button
          className="testButton"
          onClick={() => {
            setColor({
              r: Math.random(),
              g: Math.random(),
              b: Math.random(),
            });
          }}
        >
          change color
        </button>
        <GameScene color={color} />
      </>
    );
  } else {
    return <></>;
  }
};
