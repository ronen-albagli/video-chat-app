import React from "react";
import io from "socket.io-client";
import Webcam from "react-webcam";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const HostCam = () => {
  // const [src, setSrc] = useState(null);
  const socket = io("http://localhost:8080");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
    imageSrc && socket.emit("test", imageSrc);
  }, [webcamRef]);

  const interval$ = interval(75);
  const example = interval$.subscribe(() => capture());

  return (
    <div>
      <h2>No111w Live</h2>
      <Webcam
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
