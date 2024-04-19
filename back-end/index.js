import mongoose from "mongoose";
import {} from "dotenv/config";
import express from "express";
import cors from "cors"

import BlogPost from "./model/blogPost.js"; 
//Imports the blog posts from the blog post schema.

const username = process.env.USERNAME2;
const password = process.env.PASSWORD;
const PORT = process.env.PORT;

mongoose.connect(
	`mongodb+srv://${username}:${password}@reactnewsblog.pku64lm.mongodb.net/?retryWrites=true&w=majority&appName=ReactNewsBlog`
);

const app = express(); //app is our express application.

app.use(cors())
app.use(express.json());

app.get("/", async (req, res) => {
	return res.json({ message: "Hello, World" });
});

app.get("/test", async (req, res) => {
    return res.json({message: "test"})
})

app.get("/posts", async (req, res) => {
    const allPosts = await BlogPost.find();
    return res.status(200).json(allPosts)
})


app.get("/posts/:id", async (req, res) => {
    const id = req.params.id
    const allPosts = await BlogPost.findById(id);
    return res.status(200).json(allPosts)

//Creating a fetch route to a specific post via its ID...
app.get("/like:id", async (req, res) =>{
  /**
   * req should be filled with an id, then the name for the person who 
   * wants to like the post
   */
  const {id} = req.params; //get the id of the post of which 
  const postToLike = await BlogPost.findById(id); //get the specific post to like.
  const liker = req.body.liker
  const likers = postToLike.likedBy
  const likes = postToLike.likes

  if(!likers.contains(liker)){
    //if the post does not contain a like by the liker, then increment the likes and 
    //add the liker to the list of people who have liked the post
    console.log(liker + " has been added to the list of likers...");

    //update the actual post
    await BlogPost.updateOne({id}, {
      likes: likes+1,
      likers: [...likers, liker]
    });

    return res.status(200).json();

  }else{

    likers = likers.filter(liker => liker != liker)

    await BlogPost.updateOne({id}, {
      likes: likes-1,
      likers: likers
    });

    return res.status(200).json();
    //if the person has already liked the post, decrement 
    //the like and take the liker out of the array...
  }
  
})

app.post("/posts", async (req, res) => {
    console.log("uploading this data: ", req.body)
    const newPost = new BlogPost({ ...req.body, date: new Date() });
    const insertedPost = await newPost.save();
    return res.status(201).json(insertedPost);
});

const start = async () => {
	try {
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

start();

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
