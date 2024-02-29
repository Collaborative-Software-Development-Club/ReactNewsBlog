import React, { useState } from "react";

const EMPTY_TEXT = "";

const PostCreation = ({ uploadPost, user }) => {
	const [title, setTitle] = useState(EMPTY_TEXT);
	const [content, setContent] = useState(EMPTY_TEXT);

	const resetFields = () => {
		setTitle(EMPTY_TEXT);
		setContent(EMPTY_TEXT);
	};

	const createPostData = (title, content) => {
		return {
			author: user.name,
			title: title,
			content: content,
			date: getCurrentISODate(),
		};
	};

	const handleSubmit = event => {
		event.preventDefault();
		uploadPost(createPostData(title, content));
		resetFields();
	};

	const handleChangaTitle = e => setTitle(e.target.value);

	const handleChangeContent = e => setContent(e.target.value);

	return (
		<form onSubmit={handleSubmit}>
			<p>Posting as {user.name}</p>
			<label htmlFor="title">Title</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={handleChangaTitle}
			/>
			<label htmlFor="content">Content:</label>
			<textarea
				name="content"
				value={content}
				onChange={handleChangeContent}
			></textarea>
			<input type="submit" value="submit"></input>
		</form>
	);
};

export default PostCreation;

function getCurrentISODate() {
	return new Date().toISOString();
}
