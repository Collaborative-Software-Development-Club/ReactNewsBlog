import React from 'react';
import './App.css';
import MainPage from './layouts/MainPage';
import PostPage from './layouts/PostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;