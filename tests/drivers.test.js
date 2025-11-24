import request from "supertest";
import app from "../src/app";
import db from "../src/db/memory";

beforeEach(() => {
    db.cars.length = 0;
    db.drivers.length = 0;
    db.usages.length = 0;

    db.drivers.push({
        id: "driver-1",
        name: "Francisco"
    });
});

describe("Drivers API", () => {

    test("should list all drivers", async () => {
        const res = await request(app).get("/drivers");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });

    test("should filter drivers by name", async () => {
        const res = await request(app).get("/drivers?name=Fran");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(1);
    });

    test("should return empty when filter no match", async () => {
        const res = await request(app).get("/drivers?name=ZZZ");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(0);
    });

    test("should return 404 if driver not found", async () => {
        const res = await request(app).get("/drivers/invalid-id");
        expect(res.statusCode).toBe(404);
    });

    test("should create a new driver", async () => {
        const res = await request(app)
            .post("/drivers")
            .send({ name: "João" });

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("João");
    });

    test("should update a driver", async () => {
        const res = await request(app)
            .put("/drivers/driver-1")
            .send({ name: "Chico" });

        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe("Chico");
    });

    test("should return 404 when updating missing driver", async () => {
        const res = await request(app)
            .put("/drivers/not-found")
            .send({ name: "Maria" });

        expect(res.statusCode).toBe(404);
    });

    test("should delete a driver", async () => {
        const res = await request(app).delete("/drivers/driver-1");
        expect(res.statusCode).toBe(204);
        expect(db.drivers.length).toBe(0);
    });

    test("should return 404 when deleting missing driver", async () => {
        const res = await request(app).delete("/drivers/not-found");
        expect(res.statusCode).toBe(404);
    });

});
