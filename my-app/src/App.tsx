
import './App.css';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import React from 'react';
import { Route, Routes, Router } from "react-router-dom";
import { Post } from './components/post';
import { PostList } from './components/postList';
import { CreatePostFrom } from './components/createPostFrom';
import { LoginForm } from './components/loginForm';
import { RegisterFrom } from './components/registerFrom';
import { Home } from './components/home';


function App() {

  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<RegisterFrom />}/>
        <Route path='/posts' element={<PostList />}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/posts/new' element={<CreatePostFrom/>}/>
      </Routes>

    </div>
  );
}

export default App;
