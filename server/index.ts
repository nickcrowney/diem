import Express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { router } from "./router";
import { emit } from "process";

const app = Express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(cors()).use(morgan("short")).use(Express.json()).use(router);

//.use(router)

function bootstrap() {
  httpServer.listen(4000, () => {
    console.log("Server is running and connected to db, http://localhost:4000");
  });
}
bootstrap();

let onlineUserIds: String[] = [];
// let isOnline = false;

io.on("connection", (socket: Socket) => {
  console.log("socket connected on backend");
  //console.log(socket.rooms);

  //Recieving online status
  socket.on("currentlyOnline", (loginInfo) => {
    onlineUserIds.push(loginInfo);
    console.log(`${loginInfo} is currently online`);
    socket.emit("onlineUsers", onlineUserIds); //Send back array of online users
  });

  //new chat
  socket.on("message", (messages) => {
    //emit the array of full chat history here
    socket.emit("updatedMessages", messages);
  });

  socket.on("leavingRoom", () => {
    //console.log("leaving the room!!!");
    //Exit current room

    // if (socket.rooms) {
    //   socket.leave(socket.rooms);
    //   console.log(socket.rooms);
    // }

    console.log(`Leaving room with diemId ${socket.rooms}`);
  });

  socket.on("joiningRoom", (roomId) => {
    socket.join(roomId);
    console.log(
      `User with socketid: ${socket.id}joined room with diemId: ${roomId}`
    );
  });

  socket.on("disconnect", (loginInfo) => {
    onlineUserIds = onlineUserIds.filter((el) => el !== loginInfo);
    socket.emit("onlineUsers", onlineUserIds);
  });
});

module.exports = app;
