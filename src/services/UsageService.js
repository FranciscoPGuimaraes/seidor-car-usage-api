import { v4 as uuid } from "uuid";
import DriversRepository from "../repositories/DriversRepository.js";
import CarsRepository from "../repositories/CarsRepository.js";
import UsageRepository from "../repositories/UsageRepository.js";
import Usage from "../models/Usage.js";

class UsageService {
    startUsage({ carId, driverId, reason }) {
        const car = CarsRepository.findById(carId);
        if (!car) throw new Error("Car not found");
        const driver = DriversRepository.findById(driverId);
        if (!driver) throw new Error("Driver not found");

        if (UsageRepository.findOpenByCar(carId)) throw new Error("Car is already in use");
        if (UsageRepository.findOpenByDriver(driverId)) throw new Error("Driver already using a car");

        const usage = new Usage({
            id: uuid(),
            carId,
            driverId,
            startDate: new Date(),
            endDate: null,
            reason
        });
        return UsageRepository.create(usage);
    }

    finishUsage(id) {
        const existing = UsageRepository.findById(id);
        if (!existing) throw new Error("Usage not found");
        if (existing.endDate) throw new Error("Usage already finished");

        return UsageRepository.finish(id, new Date());
    }

    listUsages() {
        const list = UsageRepository.listAll();
        return list.map(u => ({
            ...u,
            car: CarsRepository.findById(u.carId),
            driver: DriversRepository.findById(u.driverId)
        }));
    }
}

export default new UsageService();
