const mongoCollections = require('./collections');
const booking = mongoCollections.booking;

module.exports = {
    async getbookingById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const bookingCollection = await booking();
            const booking1 = await bookingCollection.findOne({_id: id});
            if(booking1 == null)
            {
                return "No booking with the given ID";
            }
            else
            {
                return booking1;
            }
        }
    },

    async getAll()
    {
        const bookingCollection = await booking();
        const booking1 = await bookingCollection.find({}).toArray();
        return booking1;
    },

    async create (user_id, package_id, payment_id, total_price, total_people, booking_date)
    {
        let newbooking = {
            user_id:user_id,
            package_id: package_id,
            payment_id: payment_id,
            total_price: total_price,
            currency: "USD",
            total_people: total_people,
            booking_date: booking_date,
            booking:""
        };
        const bookingCollection = await booking();
        const insertInfo = await bookingCollection.insertOne(newbooking);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add booking";  
            }
            else
            {
                const newID = insertInfo.insertedId;
                const booking1 = await this.gethpackageById(newID);
                return booking1;
            }
    }



};
