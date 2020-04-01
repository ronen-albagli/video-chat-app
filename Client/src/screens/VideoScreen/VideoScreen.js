import React, { useState, useEffect } from "react";
import "./VideoScreen.scss";

import { fromEvent } from "rxjs";
import io from "socket.io-client";

import Webcam from "react-webcam";

// RxJS v6+
import { interval } from "rxjs";
import { take } from "rxjs/operators";
import HostCam from "./Host";
import UserCam from "./user";

const VideoScreen = props => {
  const socket = io("http://localhost:8080");
  // const socket = io("http://localhost:8080");

  // http://539cc6e6.ngrok.io

  // const webcamRef = React.useRef(null);
  // const capture = React.useCallback(
  //   () => {
  //     const imageSrc = webcamRef.current && webcamRef.current.getScreenshot();
  //     console.log(imageSrc);
  //     imageSrc && socket.emit('test', imageSrc);

  //   },
  //   [webcamRef]
  // );

  // const interval$ = interval(1000);
  // const example = interval$.pipe(take(1)).subscribe(() => capture());
  // // setInterval(() => {
  // //   console.log('sdf');
  // //   capture()
  // // }, 5000);

  // const videoConstraints = {
  //   width: 1280,
  //   height: 720,
  //   facingMode: "user"
  // };

  // const [src, setSrc] = useState(null);

  // // const imgEvent = fromEvent(socket, 'image');
  // socket.on("image", imageBuf => {
  //   if (imageBuf != src) {
  //     console.log('oin');
  //     setSrc(`${imageBuf}`);
  //   }
  // });
  // imgEvent.subscribe(imageBuf => {
  // setSrc(`${imageBuf}`);
  // });

  return (
    <div>
      <HostCam />
      <UserCam />
    </div>
  );
};

export default VideoScreen;
