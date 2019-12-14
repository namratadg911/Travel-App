const mongoCollections = require('./collections');
const booking = mongoCollections.booking;
const {
    ObjectId
} = require("mongodb");

module.exports = {
    async getbookingById(id) {
        if (!id) {
            throw "ID must be provided to search"
        } else {
            const bookingCollection = await booking();
            const booking1 = await bookingCollection.findOne({
                _id: ObjectId(id)
            });
            if (booking1 == null) {
                return "No booking with the given ID";
            } else {
                return booking1;
            }
        }
    },
    async getAllBookedByUserId(userId) {
        const bookingCollection = await booking();
        //change status in the query from pending to booked after testing for sit
        const bookingHistory = await bookingCollection.find({
            user_id: userId,
            status: "pending"
        }).sort({
            booking_date: -1
        }).toArray();
        return bookingHistory;
    },

    async getAll() {
        const bookingCollection = await booking();
        const booking1 = await bookingCollection.find({}).toArray();
        return booking1;
    },
    async createBooking(bookingDetails) {
        let newbooking = {
            user_id: bookingDetails.user_id,
            package_id: bookingDetails.package_id,
            package_name: bookingDetails.package_name,
            payment_id: "",
            total_price: bookingDetails.total_price,
            currency: bookingDetails.currency,
            total_people: bookingDetails.num_of_people,
            booking_date: new Date(bookingDetails.date_of_trip),
            status: "pending"
        };
        const bookingCollection = await booking();
        const insertInfo = await bookingCollection.insertOne(newbooking);
        if (insertInfo.insertedCount == 0) {
            throw "Couldn't add booking";
        } else {
            return insertInfo.insertedId;
        }
    },

    async create(user_id, package_id, payment_id, total_price, total_people, booking_date) {
        let newbooking = {
            user_id: user_id,
            package_id: package_id,
            payment_id: payment_id,
            total_price: total_price,
            currency: "USD",
            total_people: total_people,
            booking_date: booking_date,
            booking: ""
        };
        const bookingCollection = await booking();
        const insertInfo = await bookingCollection.insertOne(newbooking);
        if (insertInfo.insertedCount == 0) {
            throw "Couldn't add booking";
        } else {
            const newID = insertInfo.insertedId;
            const booking1 = await this.gethpackageById(newID);
            return booking1;
        }
    }



};