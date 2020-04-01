import React from "react";
import io from "socket.io-client";
import Webcam from "react-webcam";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const HostCam = () => {
  const webcamRef = React.createRef(null);
  // const [src, setSrc] = useState(null);
  const socket = io("http://5165e917.ngrok.io");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  // const capture = React.useCallback(() => {
  //   const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
  //   imageSrc && socket.emit("test", imageSrc);
  // }, [webcamRef]);

  setInterval(() => {
    console.log("1", 1);
    // capture();
    const imageSrc = webcamRef.current.getScreenshot();
    socket.emit("test", imageSrc);
  }, 75);

  // setInterval(() => {
  //   capture();
  // }, 1000);

  return (
    <div>
      <h2>No111w Live</h2>
      <Webcam
        id="test"
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    </div>
  );
};

export default HostCam;
