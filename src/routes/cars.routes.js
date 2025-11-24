import express from "express";
import CarsController from "../controllers/CarsController.js";

const router = express.Router();

router.post("/", CarsController.create);
router.get("/", CarsController.list);
router.get("/:id", CarsController.get);
router.put("/:id", CarsController.update);
router.delete("/:id", CarsController.remove);

export default router;
