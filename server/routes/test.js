const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://admin:admin@sos.nxyuct7.mongodb.net/?retryWrites=true&w=majority&appName=sos";

const client = new MongoClient(uri, {  });

async function run() {
  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected successfully to MongoDB");

    // Get the database and collection on which to run the operation
    const database = client.db("sos");
    const movies = database.collection("sos");

    // Query for a movie that has the title 'event_test0'
    const query = { title: "event_test0" };

    console.log("Querying the database...");
    const movie = await movies.findOne(query);

    if (movie) {
      console.log("Found document:", movie);
    } else {
      console.log("No document matches the provided query.");
    }
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    console.log("Closing the connection...");
    await client.close();
    console.log("Connection closed");
  }
}

run().catch(console.dir);
