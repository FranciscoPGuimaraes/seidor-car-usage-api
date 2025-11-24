class Usage {
    constructor({ id, carId, driverId, startDate, endDate = null, reason }) {
        this.id = id;
        this.carId = carId;
        this.driverId = driverId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.reason = reason;
    }
}

export default Usage;
