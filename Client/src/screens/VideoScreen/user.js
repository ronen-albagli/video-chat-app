import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { merge } from "rxjs";
import { fromEvent } from "rxjs";
import Webcam from "react-webcam";
// class UserCam extends React.Component {
//   state = {
//     src: null,
//     // socket: io("http://localhost:8080")
//   };

// render() {
// const img = document.querySelector('img');
const UserCam = () => {
  useEffect(() => {
    const img = document.getElementById("image-test");
    if (img) {
      const WS_URL = "ws://134.122.77.97:3000";
      const ws = new WebSocket(WS_URL);
      ws.onopen = () => console.log(`Connected to ${WS_URL}`);
      ws.onmessage = (message) => {
        // set the base64 string to the src tag of the image
        img.src = message.data;
      };
    }
  }, []);

  return (
    <div>
      <h2>No111w Live</h2>
      <img src="" id="image-test" alt="" />
    </div>
  );
};

export default UserCam;
