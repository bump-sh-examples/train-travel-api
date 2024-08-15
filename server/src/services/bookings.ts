import { BookingsService } from "../api/resources/bookings/service/BookingsService";
import { getBooking, getBookings, createBooking } from "../database";
import { BadRequestError, InternalServerError } from "../api";
import { Booking } from "../api";

export default new BookingsService({
  async createBooking(req, res) {
    const existing = await getBooking("123");
    if (existing) {
      throw new BadRequestError({
        status: 400,
        title: "Booking already exists",
        detail: `Booking with id ${req.body.id} already exists`,
      });
    }
    const booking = createBooking(req.body as Booking);
    if (booking instanceof Error) {
      throw new InternalServerError({
        status: 500,
        title: "Failed to create booking",
        detail: booking.message,
      });
    }
    return res.send(booking);
  },

  async deleteBooking(req, res) {},

  async getBookings(req, res) {
    const bookings = await getBookings();
    return res.send({
      data: bookings,
    });
  },
  async getBooking(req, res) {},
});
