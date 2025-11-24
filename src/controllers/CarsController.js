import CarsService from "../services/CarsService.js";

export default {
    create(req, res) {
        try {
            const car = CarsService.create(req.body);
            res.status(201).json(car);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }

    },
    list(req, res) {
        try {
            const cars = CarsService.findAll(req.query);
            res.json(cars);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    get(req, res) {
        try {
            const car = CarsService.findById(req.params.id);
            if (!car) {
                return res.status(404).json({ error: "Not found" });
            }

            res.json(car);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    update(req, res) {
        try {
            const updated = CarsService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ error: "Not found" });
            }

            res.json(updated);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    remove(req, res) {
        try {
            const success = CarsService.delete(req.params.id);
            if (!success) {
                return res.status(404).json({ error: "Not found" });
            }
    
            res.status(204).send();
                } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};