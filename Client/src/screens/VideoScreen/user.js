import React, { useState } from "react";
import io from "socket.io-client";
import { merge } from "rxjs";
import { fromEvent } from "rxjs";

// const UserCam = () => {
//   const [src, setSrc] = useState(null);
//   //   const socket = io("http://localhost:8080");

//   socket.on("image", imageBuf => {
//     if (imageBuf != src) {
//       console.log("oin");
//       setSrc(`${imageBuf}`);
//     }
//   });
//   setSrc(`${"sdfds"}`);

//   return (
//     <div>
//       <h2>No111w Live</h2>
//       <img src={src} alt="" />
//     </div>
//   );
// };

class UserCam extends React.Component {
  state = {
    src: null
    // socket: io("http://localhost:8080")
  };

  render() {
    // const {
    //   state: { socket }
    // } = this;
    // const imageReceived$ = fromEvent(socket, "image");
    // imageReceived$.subscribe(imageBuf =>
    //   this.setState(() => ({ src: imageBuf }))
    // );
    const socket = io("http://5165e917.ngrok.io");
    socket.on("image", image => {
      // console.log(1);
      this.setState(() => ({ src: image }));
    });

    return (
      <div>
        <h2>No111w Live</h2>
        <img src={this.state.src} alt="" />
      </div>
    );
  }
}
export default UserCam;
