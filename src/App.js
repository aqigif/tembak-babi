import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const productionMode = true;
const assetsName = productionMode ? "tembak-babi" : "tembak-babi-dev";
const prodFormat = "";
const unityContext = new UnityContext({
  loaderUrl: `/assets/${assetsName}/Build/${assetsName}.loader.js`,
  dataUrl: `/assets/${assetsName}/Build/${assetsName}.data${prodFormat}`,
  frameworkUrl: `/assets/${assetsName}/Build/${assetsName}.framework.js${prodFormat}`,
  codeUrl: `/assets/${assetsName}/Build/${assetsName}.wasm${prodFormat}`,
});

function App() {

  // useEffect(() => {
  //   unityContext.on("progress", (progression) => console.log(progression))
  // }, [])
  return <Unity unityContext={unityContext} />;
}

export default App;
