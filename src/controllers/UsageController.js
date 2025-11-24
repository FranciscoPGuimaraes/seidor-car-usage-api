import UsageService from "../services/UsageService.js";

export default {
    start(req, res) {
        try {
            const usage = UsageService.startUsage(req.body);
            res.status(201).json(usage);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    finish(req, res) {
        try {
            const usage = UsageService.finishUsage(req.params.id);
            res.json(usage);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    list(req, res) {
        const usages = UsageService.listUsages();
        res.json(usages);
    }
};
