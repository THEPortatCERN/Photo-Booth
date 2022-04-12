import "./styles/App.scss";
import { useRef, useState } from "react";

import Webcam from "react-webcam";

import Card from "./Card";

function App() {
  const [image, setImage] = useState('')

  const webRef = useRef(null)

  const onCapture = () => {
    const currentImg = webRef.current.getScreenshot()
    console.log('image campture', currentImg)
    setImage(`${currentImg}`)
  }

  const onSaveImg = () => {
    // post image to save.php? 
  }

  const onRetake = () => {
    setImage('')
  }

  return (
    <div className="app">
      {image.length === 0 ?
        <>
          <Webcam 
          ref={webRef} 
          className='webcam'
          screenshotFormat="image/jpeg"
          />
          <div className="controls">
          <button className="btn" onClick={onCapture}>CAPTURE</button>
          </div>
        </>
        :
        <>
          <Card image={image}/>
          <div className="controls">
          <button className="btn" onClick={onRetake}>RETAKE</button>
          <button className="btn" onClick={onSaveImg}>SAVE</button>
          </div>
        </>
      }
    </div>
  );
}

export default App;
