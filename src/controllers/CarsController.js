import CarsService from "../services/CarsService.js";

function create(req, res) {
    try {
        const car = CarsService.create(req.body);
        return res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function list(req, res) {
    try {
        const cars = CarsService.findAll(req.query);
        return res.json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function get(req, res) {
    try {
        const car = CarsService.findById(req.params.id);
        
        if (!car) {
            return res.status(404).json({ error: "Car not found" });
        }

        return res.json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function update(req, res) {
    try {
        const updated = CarsService.update(req.params.id, req.body);

        if (!updated) {
            return res.status(404).json({ error: "Car not found" });
        }

        return res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function remove(req, res) {
    try {
        const deleted = CarsService.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Car not found" });
        }

        return res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    create,
    list,
    get,
    update,
    remove,
};
