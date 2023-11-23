import { useEffect, useState } from 'react';
import './App.css';
import AddPost from './components/AddPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import EditPost from './components/EditPost';

function App() {

  return (
    <>
    <div className=' bg-slate-100 min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts />}/>
          <Route path='/addPost' element={<AddPost/>}/>
          <Route path="/:postId" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
