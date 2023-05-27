
import './App.css';
import './App.scss'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import React, { useState, useEffect } from 'react';
import { Route, Routes, Router, Link } from "react-router-dom";
import { SinglePost } from './components/post';
import { PostList } from './components/postList';
import { CreatePostFrom } from './components/createPostFrom';
import { LoginForm } from './components/loginForm';
import { RegisterFrom } from './components/registerFrom';
import { Home } from './components/home';
import { EditPost } from './components/post/editPost';

export type Post = {
  id?: number,
  title: string,
  body: string
}


function App() {

  const app = initializeApp(firebaseConfig);

  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        'https://dummyjson.com/posts'
      );
      const { posts } = await response.json();
      if(!response.ok) throw Error("Something went wrong!");
      setPosts(posts)
      console.log(posts)
    } catch (error) {
      console.log(error)
    };
  };

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to='/login' className='nav-link'>Log in</Link>
        <Link to='/register' className='nav-link'>Register</Link>
        <Link to='/posts' className='nav-link'>Posts</Link>
        {/* <Link to='/posts/:id' className='nav-link'>Post</Link> */}
        <Link to='/posts/new' className='nav-link'>Create Post</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/register' element={<RegisterFrom />}/>
        <Route path='/posts' element={<PostList 
          posts={posts}
        />}/>
        <Route path='/posts/:id' element={<SinglePost
        />}/>
        <Route path='/posts/new' element={<CreatePostFrom/>}/>
      </Routes>

    </div>
  );
}

export default App;
