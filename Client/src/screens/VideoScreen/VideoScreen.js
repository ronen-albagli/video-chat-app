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

const VideoScreen = (props) => {
  const [role, setRole] = useState(null);
  return (
    <div>
      <div>
        <div onClick={() => setRole("host")}>Join as host</div>
        <div onClick={() => setRole("user")}> >Join meeting</div>
      </div>
      {role === "host" ? <HostCam /> : <React.Fragment />}
      {role === "user" ? <UserCam /> : <React.Fragment />}
      {/* <HostCam />
      <UserCam /> */}
    </div>
  );
};

export default VideoScreen;
