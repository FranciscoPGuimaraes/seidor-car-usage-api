import express from "express";
import UsageController from "../controllers/UsageController.js";

const router = express.Router();

router.post("/", UsageController.start);
router.patch("/:id/finish", UsageController.finish);
router.get("/", UsageController.list);

export default router;