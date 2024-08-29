import { BookingsService } from "../api/resources/bookings/service/BookingsService";
import { getBooking, getBookings, createBooking } from "../database";
import { NotFoundError, InternalServerError } from "../api";
import { Booking } from "../api";

export default new BookingsService({
  async createBooking(req, res) {
    const booking = createBooking(req.body as Booking);
    if (booking instanceof Error) {
      throw new InternalServerError({
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

  async deleteBooking(req, res) {},

  async getBookings(req, res) {
    const bookings = await getBookings();
    return res.send({
      data: bookings,
    });
  },

  async getBooking(req, res) {
    const booking = await getBooking(req.params.bookingId);
    if (!booking) {
      throw new NotFoundError({
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
