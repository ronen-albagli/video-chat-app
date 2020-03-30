import React, { useState, useEffect } from "react";
import "./VideoScreen.scss";
import io from "socket.io-client";

const VideoScreen = props => {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.on("image", data => {
      setSrc(`data:image/jpeg;base64,${data}`);
    });
  }, []);

  return (
    <div>
      <h2>Now Live</h2>
      <img src={src} alt="" />
    </div>
  );
};

export default VideoScreen;
