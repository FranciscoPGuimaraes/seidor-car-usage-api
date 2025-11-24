import db from "../db/memory.js";
class DriversRepository {
    findAll(filters = {}) {
        const cars = db.cars.filter(car => {
            if (filters.color && !car.color.toLowerCase().includes(filters.color.toLowerCase()))
                return false;

            if (filters.brand && !car.brand.toLowerCase().includes(filters.brand.toLowerCase()))
                return false;

            return true;
        });

        return cars;
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
