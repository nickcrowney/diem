import Express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import { router } from './router';

const app = Express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

app.use(cors()).use(morgan('short')).use(Express.json()).use(router);

function bootstrap() {
  httpServer.listen(4000, () => {
    console.log('Server is running and connected to db, http://localhost:4000');
  });
}
bootstrap();

let onlineUserIds: String[] = [];
let currentRoom = 'room';
let currentUser = 'user';

io.on('connection', (socket: Socket) => {
  console.log('socket connected on backend');

  //Recieving online status
  socket.on('currentlyOnline', (loginInf) => {
    onlineUserIds.push(loginInf);
    socket.emit('onlineUsers', onlineUserIds);
    currentUser = loginInf;

    console.log(`${loginInf} is currently online`);
    socket.emit('onlineUsers', onlineUserIds); //Send back array of online users
  });

  //new chat
  socket.on('message', (message) => {
    socket.to(currentRoom).emit('updatedMessages', message);
  });

  socket.on('leavingRoom', () => {
    socket.leave(currentRoom);
    console.log(`Leaving room with diemId ${currentRoom}`);
  });

  socket.on('joiningRoom', (roomId) => {
    socket.join(String(roomId));
    currentRoom = roomId;
    console.log(
      `User with socketid: ${socket.id}joined room with diemId: ${roomId}`
    );
  });

  socket.on('disconnect', (loginInfo) => {
    onlineUserIds = onlineUserIds.filter((el) => el !== currentUser);
    console.log(currentUser + ' has disconnected');
  });
});

module.exports = app;
