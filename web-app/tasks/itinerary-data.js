const itineraries = [{
        "_id": "1",
        "name": "Day 1",
        "attractions": ["1", "2"],
        "hotel": "1"
    },
    {
        "_id": "2",
        "name": "Day 2",
        "attractions": ["3", "4"],
        "hotel": "2"
    }
];

function getItineraries() {
    return itineraries;
}

module.exports = {
    getItineraries
};