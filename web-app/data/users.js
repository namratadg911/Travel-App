
const mongoCollections = require("./collections");
const user = mongoCollections.user;
const bcrypt = require("bcryptjs")
const saltRounds = 16;
const ObjectId = require('mongodb').ObjectID;   //https://stackoverflow.com/questions/7825700/convert-string-to-objectid-in-mongodb

module.exports = {

    async get(id){
        if(!id) throw "Please provide id";
        
        const userCollection = await user();
        
        const user2 = await userCollection.findOne({ _id: ObjectId(id) });
        if (user2 === null) throw "No person with that id";

        return user2;
  },

    async create(email, username, password, firstname, lastname, address, city, state, phonenumber){
        
        if(!email) throw "Email of the user should be provided";
        if(!username) throw "username should be provided";
        if(!firstname) throw "firstname should be provided";
        if(!lastname) throw "lastname should be provided";
        if(!address) throw "address should be provided";
        if(!city) throw "city should be provided";
        if(!state) throw "state should be provided";
        if(!phonenumber) throw "phonenumber should be provided";
        if(!password) throw "password should be provided";
        
        const userCollection = await user();
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let newUser = {
            _id: id,
            email: email,
            firstname: firstname,
            lastname: lastname,
            username: username,
            hashedPassword: hashedPassword,
            address: address,
            city: city,
            state: state,
            phonenumber: phonenumber

        }
        const insertdata = await userCollection.insertOne(newUser);
        // if(insertdata.insertedCount == 0) throw "Could not add animal ";

        const newId = insertdata.insertedId;

        const user1 = await this.get(newId);
        return user1;
  },

    async getAll(){
        
        const userCollection = await user();

        const user3 = await userCollection.find({}).toArray();

        return user3;
        },
    
    // async remove(id){
    //     if(!id) throw "Provide an id";

    //     const userCollection = await user();
    //     const removedata = await animalCollection.findOne({ _id: ObjectId(id) });
    //     const remdata = await animalCollection.removeOne(removedata);

    //     if (remdata.deletedCount === 0)  throw `Could not delete dog with id of ${id}`;
        
    //     else
    //         return removedata;
    // },
    // async rename(id, newName) {
    //     if (!id) throw "You must provide a post id";
    //     if (!newName) throw "You must provide a name";
    //     if(typeof newName !== 'string') throw "name should be string";
            
    //     const animalCollection = await animals();
        
    //     //https://stackoverflow.com/questions/38883285/error-the-update-operation-document-must-contain-atomic-operators-when-running/38883596
    //     const updatedata = await animalCollection.updateOne({ _id: ObjectId(id)}, {$set:{name: newName}});
    //     if (updatedata.modifiedCount === 0) 
    //         throw "could not update animal successfully";
    //     return await this.get(id); 
      
    // },
};


    