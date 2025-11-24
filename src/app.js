import express from "express";
import carsRoutes from "./routes/cars.routes.js";
import driversRoutes from "./routes/drivers.routes.js";
import usageRoutes from "./routes/usage.routes.js";

const app = express();

app.use(express.json());

app.use("/cars", carsRoutes);
app.use("/drivers", driversRoutes);
app.use("/usage", usageRoutes);

app.get("/", (req, res) => res.send("Car Usage API"));

export default app;
