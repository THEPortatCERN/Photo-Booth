import "./App.scss";
import { useRef } from "react";

import Webcam from "react-webcam";

function App() {

  const webRef = useRef(null)

  const onCapture = () => {
    console.log('image campture', webRef.current.getScreenshot())
  }

  const onSaveImg = () => {
    // post data to save.php
  }

  return (
    <div className="app">
      <Webcam ref={webRef} className='webcam'/>
      <div className="controls">
      <button className="btn" onClick={onCapture}>CAPTURE</button>
      <button className="btn" onClick={onSaveImg}>SAVE</button>
      </div>
    </div>
  );
}

export default App;
