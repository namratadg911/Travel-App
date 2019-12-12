const mongoCollections = require('./collections');
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
            const hpackage1 = await hpackageCollection.findOne({_id:ObjectId(id)});
            if(hpackage1 == null)
            {
                return "No hpackage with the given ID";
            }
            else
            {
                return hpackage1;
            }
        }
    },
   async getall()
   {
    const hpackageCollection = await hpackage();
    const packages = await hpackageCollection.find({}).toArray();
    return packages;
   },
    async create(name, price, image)
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
                image: image
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
    },
    async updatePrice(id,price)
    {
        if(!id || !price)
        {
            throw "Both name and price should be given";
        }
        else
        {
            let updateInfo = {
                price: price
            };
            const hpackageCollection = await hpackage();
            const update = await hpackageCollection.updateOne({_id: ObjectId(id)}, {$set: updateInfo});
            if (update.modifiedCount === 0) 
            {
                throw 'could not update successfully';
            }
            else
            {
                const hpackage = await this.gethpackageById(ObjectId(id));
                return hpackage;
            }
        }
    },
    async removeHpackage(id)
    {
        if(!id)
        {
            throw "ID must be provided to search";
        }
        else
        {
            const hpackageCollection = await hpackage();
            const remove = await hpackageCollection.removeOne({_id: ObjectId(id)});
            if(remove.deletedCount == null)
            {
                throw "couldn't remove the package";
            }
            else
            {
                return remove;
            }
        }
    }
};