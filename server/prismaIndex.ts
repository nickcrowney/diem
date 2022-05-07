import { PrismaClient } from '@prisma/client';
import { users, diems, assignments } from './data/data';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // CREATE
  // await prisma.user.createMany({
  //   data: users,
  // });
  // await prisma.user.create({
  //   data: {
  //     name: 'Guillem',
  //     // diems: {
  //     //   create: { title: 'Santi visit', events: ['Vermut', 'Museum', 'Bar'] },
  //     // },
  //     // profile: {
  //     //   create: { status: 'Ready for beers!' },
  //     // },
  //   },
  // });
  // // // await prisma.userDiem.create({
  // // //   data: {
  // // //     diemId: 8,
  // // //     userId: 4,
  // // //     // diems: {
  // // //     //   create: { title: 'Santi visit', events: ['Vermut', 'Museum', 'Bar'] },
  // // //     // },
  // // //     // profile: {
  // // //     //   create: { status: 'Ready for beers!' },
  // // //     // },
  // // //   },
  // // // });
  await prisma.diem.create({
    data: diems[0],
    // {
    //   // authorId: 5,
    //   title: 'Codeworks',
    //   events: [
    //     'learn SQL',
    //     'read motivational quotes on t-shirt',
    //     'laugh at student coding ideas',
    //   ],
    // },
  });
  //   await prisma.profile.create({
  //     data: {
  //       userId: 4,
  //       status: 'How goes it',
  //     },
  //   });
  // // // await prisma.includedUser.create({
  // // //   data: {
  // // //     diemId: 1,
  // // //     includedUsersId: 3,
  // // //   },
  // // // });
  // UPDATE
  // const post = await prisma.diem.update({
  //   where: { id: 3 },
  //   data: {
  //     //   profile: { status: 'Having a bath' },
  //     users: {
  //       connect: {
  //         id: 4,
  //       },
  //     },
  //     // title: 'Bath time with Guillem',
  //     // events: ['suds and wash', 'coding'],
  //   },
  // });
  // console.log(post);
  // const post = await prisma.user.update({
  //   where: { id: 1 },
  //   data: {
  //     //   profile: { status: 'Having a bath' },
  //     diems: {
  //       create: {
  //         title: 'Learning prisma',
  //         events: ['get frustrated', 'cry'],
  //       },
  //     },
  //     profile: {
  //       create: { status: 'arriiit man owsit goin' },
  //     },
  //     // title: 'Bath time with Guillem',
  //     // events: ['suds and wash', 'coding'],
  //   },
  // });
  // console.log(post);
  // DELETE
  //   const deleteDiem = await prisma.diem.delete({
  //     where: {
  //       id: 2,
  //     },
  //     select: {
  //       title: true,
  //     },
  //   });
  //   const user = await prisma.profile.delete({
  //     where: { id: 2 },
  //   });
  //   const user = await prisma.user.delete({
  //     where: { id: 2 },
  //   });
  // VISUALISE
  const allUsers = await prisma.user.findMany({
    // where: { id: 3 },
    include: {
      diems: true, //{ include: { diem: true } },
      // profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
  // const allUsers = await prisma.user.findMany({
  //   where: { includedDiems: { id: 3 } },
  //   // include: {
  //   //   diems: true,
  //   //   profile: true,
  //   // },
  // });
  // console.dir(allUsers, { depth: null });
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  // const allDiems = await prisma.userDiem.findMany();
  // console.dir(allDiems, { depth: null });
  // console.log('Diems');
  // console.log(allDiems, 'All Diems');
  // const allProfiles = await prisma.profile.findMany();
  // console.log(allProfiles, 'All Profiles');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
