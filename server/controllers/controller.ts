import { User, Diem, Event } from '.prisma/client';
import { PrismaClient } from '@prisma/client';
import Express, { Request, Response } from 'express';
import { colors } from 'react-select/dist/declarations/src/theme';
const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    include: {
      diems: { include: { events: true } },
    },
  });
  res.json(users);
}

export async function getDiems(req: Request, res: Response) {
  const diems = await prisma.diem.findMany({
    include: {
      users: true,
      events: true,
      chatHistory: true,
    },
  });
  res.json(diems);
}

export async function getEvents(req: Request, res: Response) {
  const events = await prisma.event.findMany({
    // include: {
    //   diems: { include: { events: true } },
    // },
  });
  res.json(events);
}

export async function createUser(req: Request, res: Response) {
  const { name, email, picture } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      userPhoto: picture,
    },
  });
  res.json(user);
}

export async function createDiem(req: Request, res: Response) {
  const { title, date, city, user, color } = req.body;
  const diem = await prisma.diem.create({
    data: {
      title: title,
      date: date,
      color: color,
      users: {
        connect: {
          id: user,
        },
      },
    },
  });
  console.log('NEW DIEM');
  console.log(title, 'title');
  console.log(city, 'city');
  res.json(diem);
}

export async function createEvent(req: Request, res: Response) {
  const { title, id, location, time } = req.body;
  const event = await prisma.event.create({
    data: {
      title: title,
      metaDiem: {
        connect: {
          id: id,
        },
      },
      location: location,
      time: time,
    },
  });
  res.json(event);
}

export async function createMessage(req: Request, res: Response) {
  const { message, id, author, time, name } = req.body;
  const mes = await prisma.message.create({
    data: {
      content: message,
      metaDiem: {
        connect: {
          id: id,
        },
      },
      author: author,
      timestamp: time,
      name: name,
    },
  });
  res.json(mes);
}

export async function getUserById(req: Request, res: Response) {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
}

export async function getDiemById(req: Request, res: Response) {
  const id = req.params.id;
  const diem = await prisma.diem.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      users: true,
      events: true,
      chatHistory: true,
    },
  });
  res.json(diem);
}

export async function updateUser(req: Request, res: Response) {
  const { id, name, diems, profile } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      diems: diems,
    },
  });
  res.json(updatedUser);
}

//Patch a users's diem (add or delete)
export async function updateUserDiems(req: Request, res: Response) {
  const { id, diem } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      diems: diem,
    },
  });
  res.json(updatedUser);
}

export async function updateDiem(req: Request, res: Response) {
  const { diemId, userId } = req.body;
  const updatedUser = await prisma.diem.update({
    where: {
      id: diemId,
    },
    data: {
      users: {
        connect: {
          id: userId,
        },
      },
    },
  });
  res.json(updatedUser);
}

export async function removeDiemUser(req: Request, res: Response) {
  const { diemId, userId } = req.body;
  const updatedUser = await prisma.diem.update({
    where: {
      id: diemId,
    },
    data: {
      users: {
        disconnect: {
          id: userId,
        },
      },
    },
  });
  res.json(updatedUser);
}

//Patch a diem's events (add or replace an event)
// export async function updateDiemEvents(req: Request, res: Response) {
//   const { id, events } = req.body;
//   const updatedDiem = await prisma.diem.update({
//     where: {
//       id: id,
//     },
//     data: {
//       events: events,
//     },
//   });
//   res.json(updatedDiem);
// }

//Patch a diem's users (add or replace a user)
export async function updateDiemUsers(req: Request, res: Response) {
  const { id, users } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      users: users,
    },
  });
  res.json(updatedDiem);
}

//Patch a diem's title (add or replace an event)
export async function updateDiemTitle(req: Request, res: Response) {
  const { id, title } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      title: title,
    },
  });
  res.json(updatedDiem);
}
export async function updateDiemEvents(req: Request, res: Response) {
  const { metaDiem, events } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: metaDiem,
    },
    data: {
      events: events,
    },
  });
  res.json(updatedDiem);
}
export async function updateDiemMap(req: Request, res: Response) {
  const { id, map } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      map: map,
    },
  });
  res.json(updatedDiem);
}

export async function updateEventLocation(req: Request, res: Response) {
  const { id, title, location, time, photo } = req.body;
  const updatedDiem = await prisma.event.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      location: location,
      time: time,
      photo: photo,
    },
  });
  res.json(updatedDiem);
}
//Patch a diem's users (add or replace an event)
export async function updateDiemDate(req: Request, res: Response) {
  const { id, date } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      date: date,
    },
  });
  res.json(updatedDiem);
}
export async function updateDiemColor(req: Request, res: Response) {
  const { id, color } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      color: color,
    },
  });
  res.json(updatedDiem);
}

export async function deleteUser(req: Request, res: Response) {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedUser);
}

export async function deleteDiem(req: Request, res: Response) {
  const id = req.params.id;
  const deletedDiem = await prisma.diem.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedDiem);
}

export async function deleteEvent(req: Request, res: Response) {
  const id = req.params.id;
  const deletedEvent = await prisma.event.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedEvent);
}
