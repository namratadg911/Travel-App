const mongoCollections = require('./collections');
const itinerary = mongoCollections.itinerary;

async function insertMany(objArray) {
    const iCollection = await itinerary();
    //iCollection.drop();
    iCollection.insertMany(objArray);
}

async function getIteraryDetailsByIds(ids) {
    const iCollection = await itinerary();
    let itrIds = [];
    for (let i = 0; i < ids.length; i++) {
        //hapacakge changed the data type to number, hence conversion required for quick fix
        itrIds.push(ids[i].toString());
    }
    const itrList = await iCollection.find({
        _id: {
            $in: itrIds
        }
    }).toArray();
    return itrList;
}
module.exports = {
    insertMany,
    getIteraryDetailsByIds
}