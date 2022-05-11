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
  updateDiemUsers,
  updateUserDiems,
  getEvents,
  deleteEvent,
  createEvent,
} from './controllers/controller';


export const router = Router();

router.get('/users', getUsers);
router.get('/user/byId/:id', getUserById);
router.get('/diems', getDiems);
router.get('/diem/byId/:id', getDiemById);
//router.get("/profiles", getProfiles);

router.get("/events", getEvents);
router.post("/user", createUser);
router.post("/diem", createDiem);
router.post("/event", createEvent);
router.patch("/user", updateUser);
router.patch("diem", updateDiem);
router.delete("/user/:id", deleteUser);
router.delete("/diem/:id", deleteDiem);
router.delete("/event/:id", deleteEvent);

router.post('/user', createUser);
router.post('/diem', createDiem);
router.post('/event', createEvent);

router.patch('/user', updateUser);
router.patch('diem', updateDiem);

router.delete('/user/:id', deleteUser);
router.delete('/diem/:id', deleteDiem);
router.delete('/event/:id', deleteEvent);

router.patch('/user/updateDiems', updateUserDiems);
//router.patch("/user/updateProfile", updateUserProfile);
router.patch('/diem/updateEvents', updateDiemEvents);
router.patch('/diem/updateUsers', updateDiemUsers);
router.patch('/diem/updateTitle', updateDiemTitle);
