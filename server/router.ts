import { Router } from 'express';
import {
  getUsers,
  getUserById,
  getDiems,
  getDiemById,
  createUser,
  createDiem,
  updateUser,
  updateDiem,
  deleteUser,
  deleteDiem,
  updateDiemEvents,
  updateDiemTitle,
  updateDiemDate,
  updateDiemUsers,
  updateUserDiems,
  getEvents,
  deleteEvent,
  createEvent,
  removeDiemUser,
  updateEventLocation,
  updateDiemMap,
  updateDiemColor,
  createMessage,
} from "./controllers/controller";
import insertEvent from './googlecalendar';

export const router = Router();

router.get('/users', getUsers);
router.get('/user/byId/:id', getUserById);
router.get('/diems', getDiems);
router.get('/diem/byId/:id', getDiemById);
//router.get("/profiles", getProfiles);
router.get('/events', getEvents);

router.post('/user', createUser);
router.post('/diem', createDiem);
router.post('/event', createEvent);
router.post('/message', createMessage);


router.post("/calendar", (req, res) => {
  console.log(req.body)
  insertEvent(req.body).then((res: any) => {
    console.log(res);
  })
    .catch((err: any) => {
      console.log(err);
    });
})

router.patch('/user', updateUser);
router.patch('/diem', updateDiem);
router.patch('/diemColor', updateDiemColor);
router.patch('/diemTitle', updateDiemTitle);
router.patch('/diemDate', updateDiemDate);
router.patch('/diemMap', updateDiemMap);

router.patch('/eventLocation', updateEventLocation);

router.patch('/user/updateDiems', updateUserDiems);
router.patch('/user/removeDiemUser', removeDiemUser);
//router.patch("/user/updateProfile", updateUserProfile);
router.patch('/diem/updateEvents', updateDiemEvents);
router.patch('/diem/updateUsers', updateDiemUsers);
router.patch('/diem/updateTitle', updateDiemTitle);

router.delete('/user/:id', deleteUser);
router.delete('/diem/:id', deleteDiem);
router.delete('/event/:id', deleteEvent);
