import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import MainPage from './layouts/MainPage'
import PostPage from './layouts/PostPage'
import AuthorPage from './layouts/AuthorPage'

import useData from './data/useData.js'

const App = () => {
    // state is here so that it can hold when going from one page to another
    const { posts, uploadPost, comments, uploadComment } = useData()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage posts={posts} uploadPost={uploadPost} />} />
                    <Route path='/post/:id' element={<PostPage comments={comments} uploadComment={uploadComment}/>} />
                    <Route path='/authors/:author' element={<AuthorPage posts={posts}/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
