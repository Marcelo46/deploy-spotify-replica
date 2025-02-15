import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://MarceloAdmin:Bqnepc&2025*@zina.dht0g.mongodb.net/?retryWrites=true&w=majority&appName=Zina";

const client = new MongoClient(URI);

export const db = client.db("spotifyReplica");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
