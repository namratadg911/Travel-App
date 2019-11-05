const mongoCollections = require('../mongoCollections');
const hpackage = mongoCollections.hpackages;
const {ObjectId} = require("mongodb");

module.exports = {
    async gethpackageById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const hpackageCollection = await hpackage();
            const hpackage = await hpackageCollection.findOne({_id:ObjectId(id)});
            if(hpackage == null)
            {
                return "No hpackage with the given ID";
            }
            else
            {
                return hpackage;
            }
        }
    },

    async createPayment(name, price, image)
    {
        if(!price || !name)
        {
            throw "Both Type and Name must be provided";
        }
        else if(typeof(name) != "string" || typeof(name) == "undefined" || typeof(price) != "string" || typeof(price) == "undefined" )
        {
            throw "Both price and Name should be of type string";
        }
        else if(image.length < 1)
        {
            throw "Atleast one image";
        }
        else
        {
            let newhpackage = {
                name: name,
                price: price,
                location_id: "",
                list: [],
                image: []
            };
            const hpackageCollection = await hpackage();
            const insertInfo = await hpackageCollection.insertOne(newhpackage);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add payment";
            }
            else
            {
                const newID = insertInfo.insertedId;
                const hpackage = await this.gethpackageById(newID);
                return hpackage;
            }
        }
    }
}