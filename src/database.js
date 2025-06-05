const { MongoClient }= require("mongodb");

const url = "mongodb+srv://anjligupta190:XyXkvTFqabPmUlgT@learnnode.3j9ofwy.mongodb.net/"

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main(){
    await client.connect();
    console.log("Connected to server");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data = {
        "firstName":"Vikash",
        "lastName":"Giri",
        "country":"India"
    };
    const insertResult = await collection.insertMany([data]);
console.log('Inserted documents =>', insertResult);

    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());