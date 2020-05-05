/**
 * 8thWall空間認識ARの初期起動スクリプト
 * @param {function} customPipelineModule コンテンツによって編集する部分のモジュール
 */

declare let window: any;
declare let XR8: any;
declare let XRExtras: any;

const XRRUN_PARAMS = {
  canvas: document.getElementById(`camerafeed`),
  webgl2: false,
};

export default function runAR(customPipelineModule: any) {
  window.onload = () => {
    window.XRExtras ? load() : window.addEventListener(`xrextrasloaded`, load);
  };

  const load = () => {
    XRExtras.Loading.showLoading({ onxrloaded });
  };

  const onxrloaded = () => {
    XR8.addCameraPipelineModules([
      XR8.GlTextureRenderer.pipelineModule(), // Draws the camera feed.
      XR8.Threejs.pipelineModule(), // Creates a ThreeJS AR Scene.
      XR8.XrController.pipelineModule(), // Enables SLAM tracking.
      XRExtras.AlmostThere.pipelineModule(), // Detects unsupported browsers and gives hints.
      XRExtras.FullWindowCanvas.pipelineModule(), // Modifies the canvas to fill the window.
      XRExtras.Loading.pipelineModule(), // Manages the loading screen on startup.
      XRExtras.RuntimeError.pipelineModule(), // Shows an error image on runtime error.
      customPipelineModule(),
    ]);
    XR8.run(XRRUN_PARAMS);
  };
}
