"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TripsService_1 = require("../api/resources/trips/service/TripsService");
const database_1 = require("../database");
exports.default = new TripsService_1.TripsService({
    async getTrips(req, res) {
        const trips = await (0, database_1.getTrips)();
        return res.send({
            data: trips,
            links: { self: "/trips" },
        });
    },
});
