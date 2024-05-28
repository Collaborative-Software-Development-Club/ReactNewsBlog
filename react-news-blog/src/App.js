import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import MainPage from './layouts/MainPage'
import PostPage from './layouts/PostPage'
import AuthorPage from './layouts/AuthorPage'


const App = () => {
    // state is here so that it can hold when going from one page to another

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path='/post/:id' element={<PostPage />} />
                    <Route path='/authors/:author' element={<AuthorPage posts={[]}/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
