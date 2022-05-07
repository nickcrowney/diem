import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//GET all users
export async function getUsers(req: Request, res: Response) {
  const users = await prisma.user.findMany({
    // include: {
    //   diems: true,
    // },
  });
  res.json(users);
}

//GET user by id
export async function getUserById(req: Request, res: Response) {
  const id = req.params.id;
  const user = await prisma.User.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
}

//GET all diems
export async function getDiems(req: Request, res: Response) {
  const diems = await prisma.Diem.findMany({
    //   include: {
    //     users: true,
    //   },
  });
  res.json(diems);
}

//GET diem by Id
export async function getDiemById(req: Request, res: Response) {
  const id = req.params.id;
  const diem = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(diem);
}

//PUT user in diem

//PUT diem in User

//Delete user from diem

//Delete diem from user

//module.exports = { getUsers, getUserById, getDiems, getDiemById };
