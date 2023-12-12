import React, { useEffect, useRef } from 'react';
import './App.css';

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    width:  { min: 1280, ideal: 1920, max: 2560 },
    height: { min: 720 , ideal: 1080, max: 1440 } ,
    frameRate: {
      max: 30,
    }//,
    // facingMode: {
    //   exact: 'environment',
    // },
  },
};
  

function App() {
  const videoRef    = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const openCamera = async () => {
      const video = videoRef.current;
      if (video) {
        video.addEventListener('play', (event) => { console.log(event); console.log("(w,h)=(", video.videoWidth, ", " + video.videoHeight, ")") })
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
      }
    };
    openCamera();
  }, [])

  return (
    <div className="App">
      <p>Web Camera Sample</p>
      <div style={{ display: 'grid' }}>
        <div>
          <video autoPlay playsInline={true} ref={videoRef} style={{ width: '100%' }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
