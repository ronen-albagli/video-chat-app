import React from "react";
import "./VideoScreen.scss";

import { fromEvent } from "rxjs";
import io from "socket.io-client";

import Webcam from "react-webcam";

// RxJS v6+
import { interval } from "rxjs";
import { take } from "rxjs/operators";
import { debounce } from "rxjs/operators";
import _ from "lodash";

class Test extends React.Component {
  state = {
    src: null,
    startStream: false,
    // socket: io("http://localhost:8080")
  };
  componentDidMount() {
    // this.setState(() => ({ src: new Date() }));
  }

  debounce = () => _.debounce(this.startInterval, 300);

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      return true;
    }
    if (this.state !== nextState) {
      if (!this.state.startStream && nextState.startStream) {
        console.log("in111", this.state.startStream);
        console.log("in111", nextState.startStream);
        this.debounce();
      }
      return true;
    }

    return false;
  }

  // startInterval = () => {
  //   console.log("sdfsdf");
  //   const interval = setInterval(() => {
  //     console.log("in");
  //     this.state.socket.emit("test", "test image");
  //   }, 1000);
  // };

  // startVideo = () => {
  //   this.startInterval();
  // };
  render() {
    this.state.socket.on("image", (imageBuf) => {
      console.log("oin");
      this.setState(() => ({ src: new Date() }));
    });
    return (
      <div>
        <h2>Now Live</h2>
        <button onClick={this.startVideo}>start Video</button>
        {/* <img src={this.state.src} alt="" /> */}
      </div>
    );
  }
}

export default Test;
