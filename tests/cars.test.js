import request from "supertest";
import app from "../src/app";
import db from "../src/db/memory";

beforeEach(() => {
    db.cars.length = 0;
    db.drivers.length = 0;
    db.usages.length = 0;

    db.cars.push({
        id: "car-1",
        plate: "ABC1234",
        color: "blue",
        brand: "Ford"
    });
});

describe("Cars API", () => {

    test("should list all cars", async () => {
        const res = await request(app).get("/cars");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });

    test("should filter cars by brand", async () => {
        const res = await request(app).get("/cars?brand=Ford");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });

    test("should filter cars by color", async () => {
        const res = await request(app).get("/cars?color=blue");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });

    test("should return 404 if car not found by ID", async () => {
        const res = await request(app).get("/cars/invalid-id");
        expect(res.statusCode).toBe(404);
    });

    test("should create a new car", async () => {
        const res = await request(app)
            .post("/cars")
            .send({
                plate: "XYZ9876",
                color: "red",
                brand: "Fiat"
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.plate).toBe("XYZ9876");
    });

    test("should update a car", async () => {
        const res = await request(app)
            .put("/cars/car-1")
            .send({ color: "black" });

        expect(res.statusCode).toBe(200);
        expect(res.body.color).toBe("black");
    });

    test("should return 404 when updating missing car", async () => {
        const res = await request(app)
            .put("/cars/not-found")
            .send({ color: "white" });

        expect(res.statusCode).toBe(404);
    });

    test("should delete a car", async () => {
        const res = await request(app).delete("/cars/car-1");
        expect(res.statusCode).toBe(204);
        expect(db.cars.length).toBe(0);
    });

    test("should return 404 when deleting missing car", async () => {
        const res = await request(app).delete("/cars/not-found");
        expect(res.statusCode).toBe(404);
    });

});
