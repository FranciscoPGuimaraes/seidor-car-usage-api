import UsageService from "../services/UsageService.js";

export default {
    start(req, res) {
        try {
            const usage = UsageService.startUsage(req.body);
            res.status(201).json(usage);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },

    finish(req, res) {
        try {
            const usage = UsageService.finishUsage(req.params.id);
            res.json(usage);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    },

    list(req, res) {
        const usages = UsageService.listUsages();
        res.json(usages);
    }
};
