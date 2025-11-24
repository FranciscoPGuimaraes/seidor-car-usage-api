import db from "../db/memory.js";
class DriversRepository {
    findAll(filters = {}) {
        const drivers = db.drivers.filter(driver => {
            if (filters.name && !driver.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
            return true;
        });

        return drivers;
    }

    findById(id) {
        const driverFound = db.drivers.find(driver => driver.id === id) || null;
        return driverFound;
    }

    create(driver) {
        db.drivers.push(driver);
        return driver;
    }

    update(id, data) {
        const idx = db.drivers.findIndex(driver => driver.id === id);
        if (idx === -1) return null;
        db.drivers[idx] = { ...db.drivers[idx], ...data };

        const driverUpdated = db.drivers[idx];
        return driverUpdated;
    }

    delete(id) {
        const idx = db.drivers.findIndex(driver => driver.id === id);
        if (idx === -1) return false;
        db.drivers.splice(idx, 1);
        return true;
    }
}

export default new DriversRepository();
