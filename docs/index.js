import {startScene} from "./sceneinit";
// import * as camerafeedHtml from "./camerafeed.html";
// import "./index.css";

const onxrloaded = () => {
  const canvas = document.getElementById("camerafeed");
  XR8.XrController.configure();

  // Add camera pipeline modules.
  XR8.addCameraPipelineModules([
    XR8.XrController.pipelineModule(),
    XRExtras.Loading.pipelineModule(), // Manages the loading screen on startup.
    XRExtras.RuntimeError.pipelineModule(), // Shows an error image on runtime error.
  ]);
  // Add a canvas to the document for our xr scene.
  // document.body.insertAdjacentHTML("beforeend", camerafeedHtml);
  // Open the camera and start running the camera run loop.
  XR8.run({canvas});
  startScene(canvas);
};
window.XR8 ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
