// The attraction collection will store all the attractions that are created.

// ```
// {
//     	"_id":"5a5c4461-cdc9-4144-84f9-fcb278c5c122"
//         "name":"Museum",
//         "duration":"2",
//         "image":"c5d0fd67-7977-4fc5-9088-33d0347c932b"
// },
// ```

// | Name | Type | Description |
// |------|------|-------------|
// | _id  | string | A globally unique identifier to represent a particular attraction | 
// | name | string | The name of the attraction |
// | duration | number | The approxmate time taken to visit a particular attraction |
// | image | string | Images of the attractions |


const mongoCollections = require('./collections');
const attraction = mongoCollections.attraction;
//const {ObjectId} = require("mongodb");

module.exports = {
    async getattractionById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const attractionCollection = await attraction();
            
            const attraction1 = await attractionCollection.findOne({_id: id});
            //console.log(id,"Hello")
            //const attraction1 = await attractionCollection.findOne({_id:ObjectId(id)});
            if(attraction1 == null)
            {
                return "No attractions with the given ID";
            }
            else
            {
                return attraction1;
            }
        }
    },
   async getallattraction()
   {
    const attractionCollection = await attraction();
    const attraction2 = await attractionCollection.find({}).toArray();
    return attraction2;
   },
    async create(id, name, duration, image)
    {
        if(!id){
            throw "id should be provided";
        }
        if(!duration || !name)
        {
            throw "Both duration and Name must be provided";
        }
        if(typeof duration != "number"){
            throw "Duration must be a number";
        }
        if(typeof name != "string"){
            throw "Name must be a string";
        }
        else if(image.length < 1)
        {
            throw "Atleast one image";
        }
        else
        {
            let newattraction = {
                _id: id,
                name: name,
                duration: duration,
                image: image
            };
            const attractionCollection = await attraction();
            const insertInfo = await attractionCollection.insertOne(newattraction);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add attraction";
            }
            else
            {
                const newID = insertInfo.insertedId;
                const attraction3 = await this.getattractionById(newID);
                return attraction3;
            }
        }
    },
    async updateduration(id,duration)
    {
        if(!id || !duration)
        {
            throw "Both name and duration should be given";
        }
        else
        {
            let updateattraction = {
                duration: duration
            };
            const attractionCollection = await attraction();
            const update4 = await attractionCollection.updateOne({_id: id}, {$set: updateattraction});

           // const update4 = await attractionCollection.updateOne({_id: ObjectId(id)}, {$set: updateattraction});
            if (update4.modifiedCount === 0) 
            {
                throw 'could not update successfully';
            }
            else
            {
                const attraction5 = await this.getattractionById(id);

                //const attraction5 = await this.getattractionById(ObjectId(id));
                return attraction5;
            }
        }
    },
    async removeattraction(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const attractionCollection = await attraction();
            const remove6 = await attractionCollection.removeOne(id);

            //const remove6 = await attractionCollection.removeOne({_id: ObjectId(id)});
            if(remove6.deletedCount == null)
            {
                throw "couldn't remove the attraction";
            }
            else
            {
                return remove6;
            }
        }
    }
};