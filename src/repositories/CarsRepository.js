import db from "../db/memory.js";
class CarsRepository {
    findAll(filters = {}) {
        const cars = db.cars.filter(car => {
            if (filters.color && car.color !== filters.color) return false;
            if (filters.brand && car.brand !== filters.brand) return false;
            return true;
        });
        return cars;
    }

    findById(id) {
        const carFound = db.cars.find(car => car.id == id) || null;
        return carFound;
    }

    create(car) {
        const exitingCar = this.findById(car.id);
        if (exitingCar){
            throw "Already exists a car with this id";
        }
        
        db.cars.push(car);
        return car;
    }

    update(id, data) {
        const idx = db.cars.findIndex(car => car.id === id);
        if (idx === -1) return null;
        db.cars[idx] = { ...db.cars[idx], ...data };
        
        const carUpdated = db.cars[idx];
        return carUpdated;
    }

    delete(id) {
        const idx = db.cars.findIndex(car => car.id === id);
        if (idx === -1) return false;
        db.cars.splice(idx, 1);
        return true;
    }
}

export default new CarsRepository();