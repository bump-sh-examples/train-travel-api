"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookingsService_1 = require("../api/resources/bookings/service/BookingsService");
const database_1 = require("../database");
const api_1 = require("../api");
exports.default = new BookingsService_1.BookingsService({
    async createBooking(req, res) {
        const booking = (0, database_1.createBooking)(req.body);
        if (booking instanceof Error) {
            throw new api_1.InternalServerError({
                status: 500,
                title: "Failed to create booking",
                detail: booking.message,
            });
        }
        return res.send({
            ...booking,
            links: { self: `/bookings/${booking.id}` },
        });
    },
    async deleteBooking(req, res) { },
    async getBookings(req, res) {
        const bookings = await (0, database_1.getBookings)();
        return res.send({
            data: bookings,
        });
    },
    async getBooking(req, res) {
        const booking = await (0, database_1.getBooking)(req.params.bookingId);
        if (!booking) {
            throw new api_1.NotFoundError({
                status: 404,
                title: "Booking not found",
                detail: `Booking with id ${req.params.bookingId} not found`,
            });
        }
        return res.send({
            ...booking,
            links: { self: `/bookings/${booking.id}` },
        });
    },
});
