import React from 'react';

import './App.css';
import MainPage from './layouts/MainPage'
import Postspage from './layouts/Posts'
//import react router to set up routing map
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path="/">
          <Route path = "post" element ={<Postspage/>}/>
          <Route index element ={<MainPage/>}/>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;