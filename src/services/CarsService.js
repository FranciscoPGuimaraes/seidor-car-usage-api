import { v4 as uuid } from "uuid";
import CarsRepository from "../repositories/CarsRepository.js";
import Car from "../models/Car.js";

class CarsService {
    create(data) {
        const car = new Car({ id: uuid(), ...data });
        return CarsRepository.create(car);
    }
    findAll(filters) { return CarsRepository.findAll(filters); }
    findById(id) { return CarsRepository.findById(id); }
    update(id, data) { return CarsRepository.update(id, data); }
    delete(id) { return CarsRepository.delete(id); }
}

export default new CarsService();