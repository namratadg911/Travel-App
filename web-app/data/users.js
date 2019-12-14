
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

    async updateUser(id, updatedUser) {
    
        const userCollection = await user();
    
        const updatedUserData = {};
    
        if (updatedUser.email) {
            updatedUserData.email = updatedUser.email;
        }
    
        if (updatedUser.firstname) {
            updatedUserData.firstname = updatedUser.firstname;
        }
    
        if (updatedUser.lastname) {
            updatedUserData.lastname = updatedUser.lastname;
        }

        if (updatedUser.username) {
            updatedUserData.username = updatedUser.username;
        }

        if (updatedUser.hashedPassword) {
            updatedUserData.hashedPassword = updatedUser.hashedPassword;
        }

        if (updatedUser.address) {
            updatedUserData.address = updatedUser.address;
        }

        if (updatedUser.state) {
            updatedUserData.state = updatedUser.state;
        }

        if (updatedUser.city) {
            updatedUserData.state = updatedUser.city;
        }

        if (updatedUser.zip) {
            updatedUserData.state = updatedUser.zip;
        }
        
        await userCollection.updateOne({_id: id}, {$set: updatedUserData});
    
        return await this.get(id);
        },

};


    