import UsageService from "../services/UsageService.js";

function start(req, res) {
    try {
        const usage = UsageService.startUsage(req.body);
        return res.status(201).json(usage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function finish(req, res) {
    try {
        const usage = UsageService.finishUsage(req.params.id);

        if (!usage) {
            return res.status(404).json({ error: "Usage not found" });
        }

        return res.json(usage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function list(req, res) {
    try {
        const usages = UsageService.listUsages();
        return res.json(usages);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default {
    start,
    finish,
    list,
};
