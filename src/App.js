import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const productionMode = true;
const assetsName = productionMode ? "tembak-babi" : "tembak-babi-dev";
const unityContext = new UnityContext({
  loaderUrl: `/assets/${assetsName}/Build/${assetsName}.loader.js`,
  dataUrl: `/assets/${assetsName}/Build/${assetsName}.data${
    productionMode ? ".gz" : ""
  }`,
  frameworkUrl: `/assets/${assetsName}/Build/${assetsName}.framework.js${
    productionMode ? ".gz" : ""
  }`,
  codeUrl: `/assets/${assetsName}/Build/${assetsName}.wasm${
    productionMode ? ".gz" : ""
  }`,
});

function App() {
  return <Unity unityContext={unityContext} />;
}

export default App;
