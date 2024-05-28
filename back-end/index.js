import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import MongoDBFacade from "./MongoDBFacade.js";

import BlogPost from "./model/blogPost.js";
//Imports the blog posts from the blog post schema.

const username = process.env.USERNAME2;
const password = process.env.PASSWORD;
const PORT = process.env.PORT;

const app = express(); //app is our express application.
const db = new MongoDBFacade(username, password);

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
	const allPosts = await db.getAllPosts();
	return res.status(200).json(allPosts);
});

app.get("/posts/:id", async (req, res) => {
	const id = req.params.id;
	const post = await db.getSinglePost(id);
	return res.status(200).json(post);
});

app.get("/posts/author/:author", async (req, res) => {
    const author = req.params.author
    const posts = await db.getPostsFromAuthor(author)
    return res.status(200).json(posts)
})

// like a post with the specified id
app.put("/like/:id", async (req, res) => {
	const { id } = req.params;
	const likerName = req.body.liker;
	await db.updateLike(id, likerName);
	const updatedPost = await db.getSinglePost(id);
	return res.status(200).json(updatedPost.likedBy);
});

app.put("/comment/:id", async (req, res) => {
	const { id } = req.params;
	const commentAuthor = req.body.author;
	const commentContent = req.body.content;
	await db.addComment(id, commentAuthor, commentContent);
	return res.status(200);
});

app.post("/posts", async (req, res) => {
	const { body } = req;
	const insertedPost = db.uploadPost(body.author, body.title, body.content);
	return res.status(201).json(insertedPost);
});

app.put('/like/comment/:id', async (req, res) => {
    console.log('updating like count on comment')
	const { id } = req.params;
    const {content, username} = req.body
    db.updateCommentLike(id, username, content)
})

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
