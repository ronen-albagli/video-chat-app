import React, { useState, useEffect } from "react";
import "./VideoScreen.scss";

import { fromEvent } from 'rxjs';
import io from "socket.io-client";

import Webcam from "react-webcam";

const VideoScreen = props => {
  const socket = io("http://localhost:8080");

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
      console.log(imageSrc);
      imageSrc && socket.emit('test', imageSrc);

    },
    [webcamRef]
  );

  setInterval(() => {
    console.log('sdf');
    capture()
  }, 5000);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };


  const [src, setSrc] = useState(null);

  // const imgEvent = fromEvent(socket, 'image');
  socket.on("image", imageBuf => setSrc(`${imageBuf}`));
  // imgEvent.subscribe(imageBuf => {
  // setSrc(`${imageBuf}`);
  // });


  return (
    <div>


      <h2>Now Live</h2>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />;
      <button onClick={capture}>Capture photo</button>
      <img src={src} alt="" />
    </div>
  );
};

export default VideoScreen;
