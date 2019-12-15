const mongoCollections = require("./collections");
const user = mongoCollections.user;
const bcrypt = require("bcryptjs")
const saltRounds = 8;
const ObjectId = require('mongodb').ObjectID; //https://stackoverflow.com/questions/7825700/convert-string-to-objectid-in-mongodb

module.exports = {
    async isExistUserByEmail(email) {
        if (email === undefined) {
            throw "Please enter the email address!!";
        }
        const userCollection = await user();
        const userObj = await userCollection.findOne({
            email: email
        });
        if (userObj === null) return false;

        return true;

    },
    async getUserByEmail(email) {
        if (email === undefined) {
            throw "Please enter the email address!!";
        }
        const userCollection = await user();
        const userObj = await userCollection.findOne({
            email: email
        });
        return userObj;

    },
    async get(id) {
        if (!id) throw "Please provide id";

        const userCollection = await user();

        const user2 = await userCollection.findOne({
            _id: ObjectId(id)
        });
        if (user2 === null) throw "No person with that id";

        return user2;
    },

    async create(name, email, password, phonenumber) {

        if (!email) throw "Email of the user should be provided";
        if (!name) throw "firstname should be provided";
        if (!phonenumber) throw "phonenumber should be provided";
        if (!password) throw "password should be provided";
        if (password.length < 5) throw "password should be minimum of 5 letters"
        if (phonenumber.length != 10) throw "Enter valid phone number"
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) throw "Enter a valid email"
        const userCollection = await user();
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        let newUser = {
            email: email,
            name: name,
            hashedPassword: hashedPassword,
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

        await userCollection.updateOne({
            _id: id
        }, {
            $set: updatedUserData
        });

        return await this.get(id);
    },

};