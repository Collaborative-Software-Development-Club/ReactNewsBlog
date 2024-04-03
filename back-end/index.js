import mongoose from "mongoose";
import {} from "dotenv/config"
import BlogPost from "./model/blogPost.js";

const username = process.env.USERNAME
const password = process.env.PASSWORD

mongoose.connect(
	`mongodb+srv://${username}:${password}@reactnewsblog.pku64lm.mongodb.net/?retryWrites=true&w=majority&appName=ReactNewsBlog`
);


const article = new BlogPost({
	title: "SECOND POST!",
	content: "This is the second post ever",
});

const firstArticle = await BlogPost.findOne({});
console.log(firstArticle);

//await article.save();


/*
const uri = `mongodb+srv://difrancescomion1:${process.env.PASSWORD}@reactnewsblog.pku64lm.mongodb.net/?retryWrites=true&w=majority&appName=ReactNewsBlog`
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
*/
