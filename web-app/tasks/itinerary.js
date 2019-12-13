const iData = require("./itinerary-data");
const itinerary = require("../data/itinerary");

const load = async () => {

    await itinerary.insertMany(iData.getItineraries());
    console.log("done inserting to itinerary!!");
};

module.exports = {
    load
};