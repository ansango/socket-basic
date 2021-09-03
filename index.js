/**
 * * Express server
 */
const express = require("express");
const app = express();

/**
 * * Server socket
 */
const server = require("http").createServer(app);

/**
 * * Socket setup
 */
const io = require("socket.io")(server);

/**
 * * Public dir
 */

app.use(express.static(__dirname + "/public"));

/**
 * * Running
 */

io.on("connection", () => console.log("Client connected"));

server.listen(8080, () => console.log("server running in PORT 8080"));
