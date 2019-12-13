const mongoCollections = require('./collections');
const itinerary = mongoCollections.itinerary;

async function insertMany(objArray) {
    const iCollection = await itinerary();
    //iCollection.drop();
    iCollection.insertMany(objArray);
}
module.exports = {
    insertMany
}