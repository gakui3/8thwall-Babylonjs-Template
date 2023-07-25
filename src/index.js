import {customBabylonjsPipelineModule} from "./customBabylonjsPipelineModule";

const onxrloaded = () => {
  XR8.XrController.configure();

  XR8.addCameraPipelineModules([
    XRExtras.AlmostThere.pipelineModule(),
    XRExtras.Loading.pipelineModule(),
    XRExtras.RuntimeError.pipelineModule(),
    XRExtras.FullWindowCanvas.pipelineModule(),
    customBabylonjsPipelineModule(),
  ]);
};

window.onload = () => {
  window.XR ? onxrloaded() : window.addEventListener("xrloaded", onxrloaded);
};
