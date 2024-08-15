import { TripsService } from "../api/resources/trips/service/TripsService";
import { getTrips } from "../database";

export default new TripsService({
  async getTrips(req, res) {
    const trips = await getTrips();
    return res.send({
      data: trips,
    });
  },
});
