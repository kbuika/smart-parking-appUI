const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = 4000;
const index = require("./route/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', socket => {
    setInterval (() => getApiAndEmit(socket),
    1000
    );
    socket.on('disconnect', () =>
    console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get (
            "// endpoint here"
        );
        socket.emit("Data", res.json({ name: "hello"}));
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

server.listen(port, () => console.log(`Port ${port} is active...`));