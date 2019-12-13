

const mongoCollections = require('./collections');
const hotels = mongoCollections.hotels;
//const {ObjectId} = require("mongodb");

module.exports = {
    async getHotelById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const hotelCollection = await hotels();
            const hotels1 = await hotelCollection.findOne({_id:id});
            if(hotels1 == null)
            {
                return "No hotel with the given ID";
            }
            else
            {
                return hotels1;
            }
        }
    },
   async getall()
   {
    const hotelsCollection = await hotels();
    const hotel = await hotelsCollection.find({}).toArray();
    return hotel;
   },
    async create(id, name, image,rooms, rating)
    {
        if(!id || !name || !rating)
        {
            throw "Id, rating and Name must be provided";
        }
        else if(!Array.isArray(rooms))
        {
            throw "rooms should be in an array ";
        }

        else if(typeof(rating) != "string" || typeof(rating) == "undefined")
        {
            throw "rating should be of type string ";
        }

        else if(typeof(name) != "string" || typeof(name) == "undefined" )
        {
            throw "Name should be of type string ";
        }
        else if(typeof(id) != "number" || typeof(id) == "undefined" )
        {
            throw "Number should be of type id ";
        }
        else if(image.length < 1)
        {
            throw "Atleast one image";
        }
        else
        {
            let newHotel = {
                _id: id,
                name: name,
                image: image,
                rooms: rooms,
                rating: rating
            };
            const hotelsCollection = await hotels();
            const insertInfo = await hotelsCollection.insertOne(newHotel);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add hotel";
            }
            else
            {
                const newID = insertInfo.insertedId;
                const hotels = await this.getHotelById(newID);
                return hotels;
            }
        }
    },


    async removeHotel(id)
    {
        if(!id)
        {
            throw "ID must be provided to search";
        }
        else
        {
            const hotelsCollection = await hotels();
            const remove = await hotelsCollection.removeOne({_id: id});
            if(remove.deletedCount == null)
            {
                throw "couldn't remove the hotel";
            }
            else
            {
                return remove;
            }
        }
    }
};