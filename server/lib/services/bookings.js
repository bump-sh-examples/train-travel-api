"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookingsService_1 = require("../api/resources/bookings/service/BookingsService");
const database_1 = require("../database");
const api_1 = require("../api");
exports.default = new BookingsService_1.BookingsService({
    async createBooking(req, res) {
        const existing = await (0, database_1.getBooking)(req.body.id);
        if (existing) {
            throw new api_1.BadRequestError({
                status: 400,
                title: "Booking already exists",
                detail: `Booking with id ${req.body.id} already exists`,
            });
        }
        const booking = (0, database_1.createBooking)(req.body);
        if (booking instanceof Error) {
            throw new api_1.InternalServerError({
                status: 500,
                title: "Failed to create booking",
                detail: booking.message,
            });
        }
        return res.send(booking);
    },
    async deleteBooking(req, res) { },
    async getBookings(req, res) { },
    async getBooking(req, res) { },
});
