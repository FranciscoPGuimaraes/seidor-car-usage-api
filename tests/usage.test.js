import request from "supertest";
import app from "../src/app";
import db from "../src/db/memory";

beforeEach(() => {
    db.cars.length = 0;
    db.drivers.length = 0;
    db.usages.length = 0;

    db.cars.push({ id: "car-1", plate: "ABC1234", color: "blue", brand: "Ford" });
    db.drivers.push({ id: "driver-1", name: "Francisco" });
});

test("start usage success", async () => {
    const res = await request(app)
        .post("/usage")
        .send({ carId: "car-1", driverId: "driver-1", reason: "Client visit" });

    expect(res.statusCode).toBe(201);
    expect(res.body.carId).toBe("car-1");
    expect(res.body.endDate).toBeNull();
});

test("cannot start if car already in use", async () => {
    await request(app).post("/usage").send({ carId: "car-1", driverId: "driver-1", reason: "A" });
    const res = await request(app)
        .post("/usage")
        .send({ carId: "car-1", driverId: "driver-1", reason: "B" });

    expect(res.statusCode).toBe(400);
});

test("finish usage", async () => {
    const start = await request(app).post("/usage").send({ carId: "car-1", driverId: "driver-1", reason: "X" });
    const id = start.body.id;
    const finish = await request(app).patch(`/usage/${id}/finish`).send();
    expect(finish.statusCode).toBe(200);
    expect(finish.body.endDate).toBeTruthy();
});
