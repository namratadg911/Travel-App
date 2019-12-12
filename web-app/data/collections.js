const dbConnection = require("./connection");

/* Mongo db connection*/
const getCollectionFn = collection => {
    let _col = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection();
            _col = await db.collection(collection);
        }

        return _col;
    };
};

/* Listing the collections */
module.exports = {
    user: getCollectionFn("user"),
    booking: getCollectionFn("booking"),
    hpackages: getCollectionFn("hpackages"),
	hotels: getCollectionFn("hotels"),
	locations: getCollectionFn("locations"),
    itinerary: getCollectionFn("itinerary"),
    payment: getCollectionFn("payment"),
    attraction: getCollectionFn("attraction")
};