import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import BabylonScene from "./customBabylonjsPipelineModule";

function XRComponent() {
  const [xrLoaded, setXrLoaded] = useState(false);

  useEffect(() => {
    const onxrloaded = () => {
      XR8.XrController.configure();

      XR8.addCameraPipelineModules([
        XRExtras.AlmostThere.pipelineModule(),
        XRExtras.Loading.pipelineModule(),
        XRExtras.RuntimeError.pipelineModule(),
        XRExtras.FullWindowCanvas.pipelineModule(),
      ]);

      setXrLoaded(true);
    };

    if (window.XR) {
      onxrloaded();
    } else {
      window.addEventListener("xrloaded", onxrloaded);
      return () => window.removeEventListener("xrloaded", onxrloaded);
    }
  }, []);

  return (
    <div>
      <canvas id="camerafeed"></canvas>
      {xrLoaded && <BabylonScene />}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<XRComponent />);
