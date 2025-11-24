import DriversService from "../services/DriversService.js";

export default {
    create(req, res) {
        try {
            const driver = DriversService.create(req.body);
            res.status(201).json(driver);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    list(req, res) {
        try {
            const drivers = DriversService.findAll(req.query);
            res.json(drivers);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    get(req, res) {
        try {
            const driver = DriversService.findById(req.params.id);
            if (!driver) {
                return res.status(404).json({ error: "Not found" });
            }

            res.json(driver);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    update(req, res) {
        try {
            const updated = DriversService.update(req.params.id, req.body);
            if (!updated) {
                return res.status(404).json({ error: "Not found" });
            }

            res.json(updated);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },
    remove(req, res) {
        try {
            const success = DriversService.delete(req.params.id);
            if (!success) {
                return res.status(404).json({ error: "Not found" });
            }

            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }
};
