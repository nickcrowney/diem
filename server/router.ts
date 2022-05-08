import { Router } from "express";
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
} from "./controllers/controller";

export const router = Router();

router.get("/users", getUsers);
router.get("/user/byId/:id", getUserById);
router.get("/diems", getDiems);
router.get("/diem/byId/:id", getDiemById);
router.post("/user", createUser);
router.post("/diem", createDiem);
router.put("/user", updateUser);
router.put("diem", updateDiem);
router.delete("/user", deleteUser);
router.delete("/diem", deleteDiem);

//module.exports = router;
