import { Booking, Station, Trip } from "./api";

export function createBooking(booking: Booking): Booking | Error {
  return booking;
}

export function getBooking(key: string): Booking | undefined {
  return undefined;
}

export function getBookings(): Booking[] {
  return [
    {
      id: "123",
      tripId: "456",
      passengerName: "Alice",
      hasBicycle: false,
      hasDog: false,
    },
    {
      id: "124",
      tripId: "457",
      passengerName: "Bob",
      hasBicycle: true,
      hasDog: false,
    },
  ];
}

export function getStations(): Station[] {
  return [
    {
      id: "123",
      name: "Station A",
      address: "123 Station St, Station City",
      countryCode: "FR",
      timezone: "Europe/Paris",
    },
    {
      id: "124",
      name: "Station B",
      address: "124 Station St, Station City",
      countryCode: "DE",
      timezone: "Europe/Berlin",
    },
  ];
}

export function getTrips(): Trip[] {
  return [
    {
      id: "456",
      origin: "123",
      destination: "124",
      departureTime: new Date("2021-07-01T12:00:00Z"),
      arrivalTime: new Date("2021-07-01T13:00:00Z"),
    },
    {
      id: "457",
      origin: "124",
      destination: "123",
      departureTime: new Date("2021-07-01T14:00:00Z"),
      arrivalTime: new Date("2021-07-01T15:00:00"),
    },
  ];
}
