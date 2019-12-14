const mongoCollections = require('./collections');
const locations = mongoCollections.locations;
//const {ObjectId} = require("mongodb");

module.exports = {
    async getLocationById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const locationCollection = await locations();
            const locations1 = await locationCollection.findOne({_id:id});
            if(locations1 == null)
            {
                return "No location with the given ID";
            }
            else
            {
                return locations1;
            }
        }
    },
   async getall()
   {
    const locationsCollection = await locations();
    const loc = await locationsCollection.find({}).toArray();
    return loc;
   },
    async create(id, name, image)
    {
        if(!id || !name)
        {
            throw "Both Type and Name must be provided";
        }
        else if(typeof(name) != "string" || typeof(name) == "undefined" || typeof(id) != "number" || typeof(id) == "undefined" )
        {
            throw "Both id and Name should be of proper type ";
        }
        else if(image.length < 1)
        {
            throw "Atleast one image";
        }
        else
        {
            let newLoc = {
                name: name,
                _id: id,
                image: image
            };
            const locationsCollection = await locations();
            const insertInfo = await locationsCollection.insertOne(newLoc);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add location";
            }
            else
            {
                const newID = insertInfo.insertedId;
                const locations = await this.getLocationById(newID);
                return locations;
            }
        }
    },
    async getLocationIdByLocationName(name)
    {
        const locationCollection = await locations();
        const location = await locationCollection.findOne({name:name});
        if(location== null)
        {
            return null;
        }
        else
        {
            const locationId = location['_id'];
            return locationId
        }
    },

    async removeLocation(id)
    {
        if(!id)
        {
            throw "ID must be provided to search";
        }
        else
        {
            const locationsCollection = await locations();
            const remove = await locationsCollection.removeOne({_id: id});
            if(remove.deletedCount == null)
            {
                throw "couldn't remove the location";
            }
            else
            {
                return remove;
            }
        }
    }
};