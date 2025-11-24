import db from "../db/memory.js";

class UsageRepository {
    create(usage) {
        db.usages.push(usage);
        return usage;
    }

    findById(id) {
        const usageFound = db.usages.find(usage => usage.id === id) || null;
        return usageFound;
    }

    findOpenByCar(carId) {
        const usageFound = db.usages.find(usage => usage.carId === carId && !usage.endDate) || null;
        return usageFound
    }

    findOpenByDriver(driverId) {
        const usageFound = db.usages.find(usage => usage.driverId === driverId && !usage.endDate) || null;
        return usageFound;
    }

    finish(id, endDate) {
        const usageFound = db.usages.find(usage => String(usage.id) === String(id));
        if (!usageFound) {
            return null;
        }

        usageFound.endDate = endDate;
        return usageFound;
    }

    listAll() {
        const usages = db.usages.slice();
        return usages;
    }
}

export default new UsageRepository();