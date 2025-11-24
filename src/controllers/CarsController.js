import CarsService from "../services/CarsService.js";

export default {
    create(req, res) {
        const car = CarsService.create(req.body);
        res.status(201).json(car);
    },
    list(req, res) {
        const cars = CarsService.findAll(req.query);
        res.json(cars);
    },
    get(req, res) {
        const car = CarsService.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ error: "Not found" });
        }

        res.json(car);
    },
    update(req, res) {
        const updated = CarsService.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Not found" });
        }
        
        res.json(updated);
    },
    remove(req, res) {
        const success = CarsService.delete(req.params.id);
        if (!success) {
            return res.status(404).json({ error: "Not found" });
        }

        res.status(204).send();
    }
};