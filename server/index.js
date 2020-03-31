const express = require("express");
const cv = require("opencv4nodejs");
const app = express();
const path = require("path");

const server = require("http").Server(app);

const t = app.listen(8080);

const io = require("socket.io").listen(t);
console.log('sfsdf')

// const wCap = new cv.VideoCapture(0);
// console.log(wCap)

let image;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// console.log(io);
// setInterval(() => {
//   // const frame = wCap.read();
//   // const image = cv.imencode(".jpg", frame).toString("base64");
//   io.emit("image", new Date());
//   console.log("emit");
// }, 75);

console.log('io', io.on)
io.on('connection', (socket) => {
  socket.on('test', (data) => {
    console.log('d')
    io.emit("image", data);
  });

})
