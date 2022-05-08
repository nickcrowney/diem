import { User, Diem, Profile, Event } from ".prisma/client";
import { PrismaClient } from "@prisma/client";
import Express, { Request, Response } from "express";
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
      users: { include: { profile: true } },
    },
  });
  res.json(diems);
}

export async function createUser(req: Request, res: Response) {
  const { name, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name: name,
      password: password,
    },
  });
  res.json(user);
}

export async function createDiem(req: Request, res: Response) {
  const { title } = req.body;
  const diem = await prisma.diem.create({
    data: {
      title: title, //Only title is required to create diem
    },
  });
  res.json(diem);
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
  });
  res.json(diem);
}

export async function updateUser(req: Request, res: Response) {
  const { id, name, password, diems } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      password: password,
      diems: diems,
    },
  });
  res.json(updatedUser);
}

export async function updateDiem(req: Request, res: Response) {
  const { id, title, events, users, date } = req.body;
  const updatedUser = await prisma.diem.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      events: events,
      users: users,
      date: date,
    },
  });
  res.json(updatedUser);
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
