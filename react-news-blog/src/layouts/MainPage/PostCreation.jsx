import React, { useState } from "react";

const PostCreation = ({ uploadPost, user }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<div>
			<h2>Write a post</h2>
			<form
				className="post-creation-form"
				onSubmit={event => {
					event.preventDefault();
					console.log("is submitting");
					setTitle("");
					setContent("");
					uploadPost({
						author: user.name,
						title: title,
						content: content,
						likes: 0,
						date: new Date().toISOString(),
					});
				}}
			>
				<p>Posting as {user.name}</p>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<label htmlFor="content">Content:</label>
				<textarea
					name="content"
					value={content}
					onChange={e => setContent(e.target.value)}
				></textarea>
				<input type="submit" value="submit"></input>
			</form>
		</div>
	);
};

export default PostCreation;
