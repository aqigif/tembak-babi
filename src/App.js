import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/assets/tembak-babi-dev/Build/tembak-babi-dev.loader.js",
  dataUrl: "/assets/tembak-babi-dev/Build/tembak-babi-dev.data",
  frameworkUrl: "/assets/tembak-babi-dev/Build/tembak-babi-dev.framework.js",
  codeUrl: "/assets/tembak-babi-dev/Build/tembak-babi-dev.wasm",
});

function App() {
  return <Unity unityContext={unityContext} />;
}

export default App