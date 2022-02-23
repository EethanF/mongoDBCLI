require("dotenv").config();
const { MongoClient } =  require ("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

const connection = async () => {
    try {
        await client.connect(); //opens up connection to mongodb
        const db = client.db("Movies");//no await already exists in node this is the database
        return db.collection("Film");//this is what is stored in database

    } catch (error) {
        console.log(error)
    }
};

module.exports = {client, connection}