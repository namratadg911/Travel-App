const mongoCollections = require('./collections');
const payment = mongoCollections.payment;
const {ObjectId} = require("mongodb");

module.exports = {
    async getPaymentById(id)
    {
        if(!id)
        {
            throw "ID must be provided to search"
        }
        else
        {
            const paymentCollection = await payment();
            const payment1 = await paymentCollection.findOne({_id:ObjectId(id)});
            if(payment1 == null)
            {
                return "No Payment with the given ID";
            }
            else
            {
                return payment1;
            }
        }
    },

    async createPayment(type, name)
    {
        if(!type || !name)
        {
            throw "Both Type and Name must be provided";
        }
        else if(typeof(name) != "string" || typeof(name) == "undefined" || typeof(type) != "string" || typeof(type) == "undefined" )
        {
            throw "Both Type and Name should be of type string";
        }
        else
        {
            let newPayment = {
                type: type,
                name: name
            };
            const paymentCollection = await payment();
            const insertInfo = await paymentCollection.insertOne(newPayment);
            if(insertInfo.insertedCount == 0)
            {
                throw "Couldn't add payment";
            }
            else
            {
                const newID = insertInfo.insertedId;
                const payment = await this.getPaymentById(newID);
                return payment;
            }
        }
    }
};