"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const _1 = require(".");
const bookings_1 = __importDefault(require("./services/bookings"));
const stations_1 = __importDefault(require("./services/stations"));
const trips_1 = __importDefault(require("./services/trips"));
const payments_1 = __importDefault(require("./services/payments"));
const PORT = process.env.PORT ?? 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, _1.register)(app, {
    bookings: bookings_1.default,
    payments: payments_1.default,
    stations: stations_1.default,
    trips: trips_1.default,
});
app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);
exports.default = app;
