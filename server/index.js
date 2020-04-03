// const express = require("express");
// // const cv = require("opencv4nodejs");
// const app = express();
// const path = require("path");

// const server = require("http").Server(app);

// const t = app.listen(8080);

// const io = require("socket.io").listen(t);
// console.log("sfsdf");

// // const wCap = new cv.VideoCapture(0);
// // console.log(wCap)

// let image;
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
// // console.log(io);
// // setInterval(() => {
// //   // const frame = wCap.read();
// //   // const image = cv.imencode(".jpg", frame).toString("base64");
// //   io.emit("image", new Date());
// //   console.log("emit");
// // }, 75);

// console.log("io", io.on);
// io.on("connection", socket => {
//   socket.on("test", data => {
//     console.log("d");
//     io.emit("image", data);
//   });
// });

const path = require("path");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

const wsServer = new WebSocket.Server({ server: httpServer }, () =>
  console.log(`WS server is listening at ws://localhost:${WS_PORT}`)
);

// array of connected websocket clients
let connectedClients = [];

wsServer.on("connection", (ws, req) => {
  console.log("Connected");
  // add new connected client
  connectedClients.push(ws);
  // listen for messages from the streamer, the clients will not send anything so we don't need to filter
  ws.on("message", (data) => {
    // send the base64 encoded frame to each connected ws
    connectedClients.forEach((ws, i) => {
      if (ws.readyState === ws.OPEN) {
        console.log("con");
        // check if it is still connected
        ws.send(data); // send
      } else {
        // if it's not connected remove from the array of connected ws
        connectedClients.splice(i, 1);
      }
    });
  });
});

// HTTP stuff
httpServer.listen(PORT, () =>
  console.log(`HTTP server listening at http://localhost:${PORT}`)
);
