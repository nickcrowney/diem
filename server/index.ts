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

let chatHistory: String[] = [];
// let onlineUserIds: Number[] = [];
// let isOnline = false;

//TODO impliment chat server logic in here
io.on("connection", (socket: Socket) => {
  console.log("Socket connection made");
  socket.on("Message", (message) => {
    //Recieve a message from a user, put this in chat history array, and ship back to all participant's of
    //chatHistory = [...chatHistory, message];
    //socket.emit("updatedChat", chatHistory);
  });

  socket.on("leavingroom", (cb) => {
    console.log("leaving the room!!!");
    socket.emit("left the room!!!");
  });
  // socket.on("leavingroom" (cb) => {
  //   if(socket.rooms) {
  //     socket.leave(socket.rooms)
  //   }
  // })
  socket.on("joinroom", (roomId) => {
    socket.join(roomId);
    console.log(
      `User with socketid: ${socket.id}joined room with diemId: ${roomId}`
    );
    socket.emit(`joined room with diem id ${roomId}`);
    // socket.on("Message", (message) => {
    //   //Recieve a message from a user, put this in chat history array, and ship back to all participant's of
    //   chatHistory = [...chatHistory, message];
    //   socket.emit("updatedChat", chatHistory);
    // });
  });
  socket.on("disconnect", (arg) => {
    console.log("disconnecting now", socket.id);
    //onlineUsers = [...onlineUserIds.filter((el) s=> el !== socket.id)];
    // isOnline = false
    // socket.emit("currentlyOnline" isOnline);
  });
});

module.exports = app;
