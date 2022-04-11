import "./App.scss";
import { useRef } from "react";

import Webcam from "react-webcam";

function App() {

  const webRef = useRef(null)


  return (
    <>
      <Webcam ref={webRef} />
    </>
  );
}

export default App;
