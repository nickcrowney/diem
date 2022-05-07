import Router from "express";
import {
  getUsers,
  getUserById,
  getDiems,
  getDiemById,
} from "./controllers/controllers";

const router = Router();

//GET All Diems
router.get("/diems", getDiems);

//GET Diem by Id
router.get("/diem/byId/:id", getDiemById);

//GET all Users
router.get("/users", getUsers);

//GET User by Id
router.get("/user/byId/:id", getUserById);

//POST new Diem by Id

//POST new User by Id

//PUT add user to Diem

//PUT remove user from Diem

//Delete Diem by Id
export default router;
