import express from "express";
import DriversController from "../controllers/DriversController.js";

const router = express.Router();

router.post("/", DriversController.create);
router.get("/", DriversController.list);
router.get("/:id", DriversController.get);
router.put("/:id", DriversController.update);
router.delete("/:id", DriversController.remove);

export default router;