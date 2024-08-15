import cors from "cors";
import express from "express";

import { register } from ".";
import bookings from "./services/bookings";
import stations from "./services/stations";
import trips from "./services/trips";
import payments from "./services/payments";

const PORT = process.env.PORT ?? 8080;

const app = express();

app.use(cors());

register(app, {
  bookings: bookings,
  payments: payments,
  stations: stations,
  trips: trips,
});

app.listen(PORT);
console.log(`🎉 Listening on port ${PORT}...`);

export default app;
