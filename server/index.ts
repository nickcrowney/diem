import Express, { Request, Response } from "express";
//import { PrismaClient } from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import http from "http";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import router from "./router";

//const prisma = new PrismaClient();

const app = Express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(cors()).use(morgan("short")).use(Express.json());

//.use(router)

function bootstrap() {
  httpServer.listen(4000, () => {
    console.log("Server is running and connected to db, http://localhost:4000");
  });
}
bootstrap();

io.on("connection", (socket: Socket) => {
  // ...
});

module.exports = app;
