import { v4 as uuid } from "uuid";
import DriversRepository from "../repositories/DriversRepository.js";
import Driver from "../models/Driver.js";

class DriversService {
    create(data) {
        const driver = new Driver({ id: uuid(), ...data });
        return DriversRepository.create(driver);
    }
    findAll(filters) { return DriversRepository.findAll(filters); }
    findById(id) { return DriversRepository.findById(id); }
    update(id, data) { return DriversRepository.update(id, data); }
    delete(id) { return DriversRepository.delete(id); }
}

export default new DriversService();
