export const users = [
  {
    // id: 1,
    name: "Nick",
    // diems: [],
    // profile: { id: 1, status: 'Ready for beers!', userId: 1 }
  },
  {
    // id: 3,
    name: "Alastair",
    // diems: [],
    // profile: { id: 3, status: 'Having a bath', userId: 3 }
  },
  {
    // id: 4,
    name: "Casey",
    // diems: [ { id: 1, diemId: 8, userId: 4 } ],
    // profile: { id: 4, status: 'How goes it', userId: 4 }
  },
  {
    // id: 5,
    name: "Guillem",
    // diems: [],
    // profile: { id: 5, status: "I'm not a racist", userId: 5 }
  },
];

export const diems = [
  //   {
  //     // id: 1,
  //     title: 'Learning prisma',
  //     events: ['get frustrated', 'ask Thais'],
  //     // authorId: 1,
  //   },
  // //   {
  // //     // id: 1,
  // //     title: 'Sunburning on the terrace',
  // //     events: ['coffee outside', 'rock throwing'],
  // //     users: {
  // //       create: [
  // //         {
  // //           user: {
  // //             connect: {
  // //               id: 1,
  // //             },
  // //           },
  // //         },
  // //       ],
  // //     },
  // //     // authorId: 1,
  // //   },
  //   {
  //     // id: 1,
  //     title: 'Alastair, Casey, Nick hang out',
  //     events: ['beach', 'bravas'],
  //     users: {
  //       create: [
  //         {
  //           user: {
  //             connect: {
  //               id: 1,
  //             },
  //           },
  //         },
  //         {
  //           user: {
  //             connect: {
  //               id: 2,
  //             },
  //           },
  //         },
  //         {
  //           user: {
  //             connect: {
  //               id: 3,
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     // authorId: 1,
  //   },
  //   {
  //     // id: 3,
  //     title: 'Bath time with Guillem',
  //     events: ['suds and wash', 'coding'],
  //     users: {
  //       connect: {
  //         id: 2,
  //       },
  //     },
  //     // authorId: 3,
  //   },
  {
    // id: 4,
    title: "Secret meeting away from Nick",
    events: ["mischievous meeting", "cigar smoking"],
    users: {
      connect: [
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    // authorId: 4,
  },
  //   {
  //     // id: 5,
  //     title: 'Shopping trip',
  //     events: ['Buy white trousers', 'Gym trip', 'Coding in bed with Alastair'],
  //     // authorId: 5,
  //   },
];

export const events = [
  {
    title: "pre-drinks",
    metaDiemId: 4,
    location: "Hoppiness",
    time: "12:00",
  },
];

// // export const assignments = [
// //   {
// //     diemId: 6,
// //     userId: 1,
// //   },
// //   //   {
// //   //     diemId: 5,
// //   //     userId: 2,
// //   //   },
// //   //   {
// //   //     diemId: 5,
// //   //     userId: 3,
// //   //   },
// //   //   {
// //   //     diemId: 1,
// //   //     userId: 1,
// //   //   },
// //   //   {
// //   //     diemId: 1,
// //   //     userId: 2,
// //   //   },
// //   //   {
// //   //     diemId: 1,
// //   //     userId: 3,
// //   //   },
// //   //   {
// //   //     diemId: 2,
// //   //     userId: 2,
// //   //   },
// //   //   {
// //   //     diemId: 2,
// //   //     userId: 3,
// //   //   },
// //   //   {
// //   //     diemId: 3,
// //   //     userId: 3,
// //   //   },
// //   //   {
// //   //     diemId: 3,
// //   //     userId: 1,
// //   //   },

// //   //   {
// //   //     diemId: 4,
// //   //     userId: 4,
// //   //   },
// //   //   {
// //   //     diemId: 4,
// //   //     userId: 3,
// //   //   },
// //   //   {
// //   //     diemId: 4,
// //   //     userId: 2,
// //   //   },
// // ];
