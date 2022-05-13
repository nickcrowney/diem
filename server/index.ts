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
let onlineUserIds: Number[] = [];

//TODO impliment chat server logic in here
io.on("connection", (socket: Socket) => {
  socket.on("Message", (message) => {
    chatHistory = [...chatHistory, message];
    socket.emit("updatedChat", chatHistory);
  });
  socket.on("disconnect", (arg) => {
    console.log("disconnecting now", socket.id);
    onlineUsers = [...onlineUserIds.filter((el) => el !== socket.id)];

    socket.emit("currentlyOnline");
  });
});

module.exports = app;

// const prisma = new PrismaClient();

// //TODO Break these into router and controller files
// //GET all users
// app.get("/users", async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany({
//     include: {
//       diems: { include: { events: true } },
//     },
//   });
//   res.json(users);
// });

// //GET all diems
// app.get("/diems", async (req: Request, res: Response) => {
//   const diems = await prisma.diem.findMany({
//     include: {
//       users: { include: { profile: true } },
//     },
//   });
//   res.json(diems);
// });

// //POST new user
// app.post("/user", async (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       name: username,
//       password: password,
//     },
//   });
//   res.json(user);
// });

// //POST new diem
// app.post("/diem", async (req: Request, res: Response) => {
//   const { title } = req.body;
//   const diem = await prisma.diem.create({
//     data: {
//       title: title, //Only title is required to create diem
//     },
//   });
//   res.json(diem);
// });

// //GET user by id
// app.get("user/byId/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const user = await prisma.user.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(user);
// });

// //GET diem by id
// app.get("diem/byId/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const diem = await prisma.diem.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(diem);
// });

// //PUT update user info
// app.put("/user", async (req: Request, res: Response) => {
//   const { id, name, password, profile, diems } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       name: name,
//       password: password,
//       profile: profile,
//       diems: diems,
//     },
//   });
//   res.json(updatedUser);
// });

// //PUT update diem info
// app.put("/diem", async (req: Request, res: Response) => {
//   const { id, title, events, users, date } = req.body;
//   const updatedUser = await prisma.diem.update({
//     where: {
//       id: id,
//     },
//     data: {
//       title: title,
//       events: events,
//       users: users,
//       date: date,
//     },
//   });
//   res.json(updatedUser);
// });

// //DELETE user
// app.delete("/user/byId:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const deletedUser = await prisma.user.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(deletedUser);
// });

// //DELETE diem
// app.delete("/diem/byId:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const deletedDiem = await prisma.diem.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(deletedDiem);
// });

//PUT
// app.put("/", async (req: Request, res: Response) => {
//   const { id, username } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       username: usernsame,
//     },
//   });
//   res.json(updatedUser);
// });

// const app = express();
// app.use(express.json());

// app.post("/", async (req: Request, res: Response) => {
//   const { username, password } = req.body;
//   const user = await prisma.user.create({
//     data: {
//       username: username,
//       password: password,
//     },
//   });
//   res.json(user);
// });

// app.post("/createManyUsers", async (req: Request, res: Response) => {
//   const { userList } = req.body;
//   const users = await prisma.user.createMany({
//     data: userList,
//   });
//   res.json(users);
// });

// app.get("/", async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany({
//     include: {
//       cars: true,
//     },
//   });
//   res.json(users);
// });

// app.get("/byId/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const user = await prisma.user.findUnique({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(user);
// });

// app.put("/", async (req: Request, res: Response) => {
//   const { id, username } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       username: username,
//     },
//   });
//   res.json(updatedUser);
// });

// app.delete("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const deletedUser = await prisma.user.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(deletedUser);
// });

// app.post("/createManyCars", async (req: Request, res: Response) => {
//   const { carList } = req.body;
//   const cars = await prisma.car.createMany({
//     data: carList,
//   });
//   res.json(cars);
// });

// app.listen(3007, () => {
//   console.log("Server running on 3007");
// });
