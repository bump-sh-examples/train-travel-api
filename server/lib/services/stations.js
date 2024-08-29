"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StationsService_1 = require("../api/resources/stations/service/StationsService");
const database_1 = require("../database");
exports.default = new StationsService_1.StationsService({
    async getStations(req, res) {
        const stations = await (0, database_1.getStations)();
        return res.send({
            data: stations,
            links: { self: "/stations" },
        });
    },
});
