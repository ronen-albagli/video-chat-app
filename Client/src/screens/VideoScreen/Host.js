import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Webcam from "react-webcam";
import { interval } from "rxjs";
import { take } from "rxjs/operators";

const HostCam = () => {
  useEffect(() => {
    const video = document.getElementById("video");
    if (video) {
      // request access to webcam
      navigator.mediaDevices
        .getUserMedia({ video: { width: 426, height: 240 } })
        .then((stream) => (video.srcObject = stream));

      // returns a frame encoded in base64
      const getFrame = () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        const data = canvas.toDataURL("image/png");
        return data;
      };
      const WS_URL = window.location.origin.replace(/^http/, "ws");
      const ws = new WebSocket("ws://134.122.77.97:3000");
      ws.onopen = () => {
        setInterval(() => {
          ws.send(getFrame());
        }, 200);
      };
    }
  }, []);
  return (
    <div>
      <h2>No111w Live</h2>
      <video id="video" autoPlay></video>
    </div>
  );
};

export default HostCam;
