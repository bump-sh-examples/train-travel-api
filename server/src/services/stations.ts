import { StationsService } from "../api/resources/stations/service/StationsService";
import { getStations } from "../database";

export default new StationsService({
  async getStations(req, res) {
    const stations = await getStations();
    return res.send({
      data: stations,
      links: { self: "/stations" },
    });
  },
});
