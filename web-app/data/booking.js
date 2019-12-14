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

    }

};
