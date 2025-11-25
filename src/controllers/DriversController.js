import DriversService from "../services/DriversService.js";

function create(req, res) {
    try {
        const driver = DriversService.create(req.body);
        return res.status(201).json(driver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function list(req, res) {
    try {
        const drivers = DriversService.findAll(req.query);
        return res.json(drivers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function get(req, res) {
    try {
        const driver = DriversService.findById(req.params.id);

        if (!driver) {
            return res.status(404).json({ error: "Driver not found" });
        }

        return res.json(driver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function update(req, res) {
    try {
        const updated = DriversService.update(req.params.id, req.body);

        if (!updated) {
            return res.status(404).json({ error: "Driver not found" });
        }

        return res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function remove(req, res) {
    try {
        const deleted = DriversService.delete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ error: "Driver not found" });
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
