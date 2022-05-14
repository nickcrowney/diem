// const users = [
//   {
//     id: 4,
//     name: 'Lucas Radebe',
//     status: null,
//     userPhoto:
//       'https://cdn.mos.cms.futurecdn.net/HeaXAgSBJHNYhu3CYKYgPf-1024-80.jpg.webp',
//     email: 'springbokrugbyfan@gmail.com',
//   },
//   {
//     id: 9,
//     name: 'Pope John Paul II',
//     status: null,
//     userPhoto:
//       'https://www.biography.com/.image/ar_1:1%2Cc_fill%2…TgwMjAyNDQwOTQxOTA1MjQw/gettyimages-515124692.jpg',
//     email: 'pope@gmail.com',
//   },
//   {
//     id: 6,
//     name: 'Casey Christiansen',
//     status: null,
//     userPhoto:
//       'https://images6.fanpop.com/image/photos/37800000/-Chris-Evans-chris-evans-37871454-191-264.jpg',
//     email: 'howgoesit@gmail.com',
//   },
//   {
//     id: 2,
//     name: 'George Alagiah',
//     status: null,
//     userPhoto:
//       'https://ichef.bbci.co.uk/news/976/cpsprodpb/7A43/production/_99599213_georgealagiahbbc.jpg',
//     email: 'georgeyboy@gmail.com',
//   },
//   {
//     id: 3,
//     name: 'Huw Edwards',
//     status: null,
//     userPhoto:
//       'https://i.guim.co.uk/img/media/f1c372df7ce07e125e5…&fit=max&dpr=2&s=64dbcd6024743dc3fb555e38f6c3a3ef',
//     email: 'whoshuw@gmail.com',
//   },
//   {
//     id: 8,
//     name: 'Dan Fry',
//     status: null,
//     userPhoto:
//       'https://images.ecestaticos.com/KF-WVV9ZaAWhu2G05Wi…F7ce%2Fcbc%2F32b7cecbc0443e710741608ba27ad509.jpg',
//     email: 'code@coding.com',
//   },
// ];
// const currentDiem = {
//   id: 2,
//   users: [
//     {
//       id: 4,
//       name: 'Lucas Radebe',
//       status: null,
//       userPhoto:
//         'https://cdn.mos.cms.futurecdn.net/HeaXAgSBJHNYhu3CYKYgPf-1024-80.jpg.webp',
//       email: 'springbokrugbyfan@gmail.com',
//     },
//     {
//       id: 9,
//       name: 'Pope John Paul II',
//       status: null,
//       userPhoto:
//         'https://www.biography.com/.image/ar_1:1%2Cc_fill%2…TgwMjAyNDQwOTQxOTA1MjQw/gettyimages-515124692.jpg',
//       email: 'pope@gmail.com',
//     },
//     {
//       id: 6,
//       name: 'Casey Christiansen',
//       status: null,
//       userPhoto:
//         'https://images6.fanpop.com/image/photos/37800000/-Chris-Evans-chris-evans-37871454-191-264.jpg',
//       email: 'howgoesit@gmail.com',
//     },
//   ],
// };
// const availableUsers = users.filter((user) => {
//   return !currentDiem.users.some((el) => el.id == user.id);
// });
// console.log(availableUsers, 'CURRENT DIEM USERZ');
// console.log(users, 'users');

// // const filteredUsers = users.filter((user) => {
// //   return !availableUsers.includes(user);
// // });
// const filteredUsers = users.filter((el) => {
//   return selectedOptions.some((elem) => {
//     //   if (elem.id === el.id) return false;
//     //   else return true;
//     return elem.id !== el.id;
//   });
// });
// console.log(filteredUsers, 'FILTERED');

const array = [
  { date: '2022-05-20' },
  { date: '2022-05-27' },
  { date: '2024-05-24' },
  { date: '2022-05-21' },
  { date: '2022-06-24' },
  { date: '2022-05-24' },
];
console.log(array);
array.sort(function (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.date) - new Date(b.date);
});
console.log(array);
function dateFixer(calendarDate) {
  const options = {
    // weekday: 'long',
    // year: 'numeric',
    day: 'numeric',
    month: 'long',
  };
  const currentDate = new Date(calendarDate).toLocaleDateString(
    'en-GB',
    options
  );
  const firstWhite = currentDate.indexOf(' ');
  const firstBit = currentDate.slice(0, firstWhite);
  const secondBit = currentDate.slice(firstWhite);
  const nth = function (d) {
    const dString = String(d);
    const last = +dString.slice(-2);
    if (last > 3 && last < 21) return 'th';
    switch (last % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  const finishedDate = firstBit + nth(firstBit) + secondBit;
  return finishedDate;
}
console.log(dateFixer('2022-05-11'));

// const resFuture = array.filter((el) => {
//   // console.log(el.date, 'EL DATO', currentDate, 'CURR DATO');
//   // console.log(new Date(el.date), 'EL DATO', new Date(currentDate), 'CURR DATO');
//   return new Date(el.date) > new Date(currentDate);
// });
// console.log(resFuture);
