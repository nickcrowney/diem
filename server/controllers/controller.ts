import { User, Diem, Event } from ".prisma/client";
import { PrismaClient } from "@prisma/client";
import { time } from "console";
//import { profile } from "console";
import Express, { Request, Response } from "express";
import { colors } from "react-select/dist/declarations/src/theme";
import { diems } from "../data/data";
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

// export async function getProfiles(req: Request, res: Response) {
//   const profiles = await prisma.profile.findMany({
//     // include: {
//     //   diems: { include: { events: true } },
//     // },
//   });
//   res.json(profiles);
// }

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
      title: title, //Only title is required to create diem
      date: date,
      city: city,
      color: color,
      users: {
        connect: {
          id: user,
        },
      },
    },
  });
  console.log("NEW DIEM");
  console.log(title, "title");
  console.log(city, "city");
  res.json(diem);
}

//TODO
export async function createEvent(req: Request, res: Response) {
  const { title, id, location, time } = req.body;
  const event = await prisma.event.create({
    data: {
      title: title, //Only title is required to create diem
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

// export async function createProfile(req: Request, res: Response) {
//   const { email, picture, user} = req.body;
//   const profile = await prisma.profile.create({
//     data: {
//       email: email, //Only title is required to create diem
//       userPhoto: picture,
//       user:
//     },
//   });
//   res.json(profile);
// }

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
      //profile: profile,
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

//Patch a users's profile
// export async function updateUserProfile(req: Request, res: Response) {
//   const { id, profile } = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: id,
//     },
//     data: {
//       profile: profile,
//     },
//   });
//   res.json(updatedUser);
// }

export async function updateDiem(req: Request, res: Response) {
  const { diemId, userId } = req.body;
  const updatedUser = await prisma.diem.update({
    where: {
      id: diemId,
    },
    data: {
      // title: title,
      // events: events,
      users: {
        connect: {
          id: userId,
        },
      },
      // date: date,
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
      // title: title,
      // events: events,
      users: {
        disconnect: {
          id: userId,
        },
      },
      // date: date,
    },
  });
  res.json(updatedUser);
}

//Patch a diem's events (add or replace an event)
export async function updateDiemEvents(req: Request, res: Response) {
  const { id, events } = req.body;
  const updatedDiem = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      events: events,
    },
  });
  res.json(updatedDiem);
}

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
