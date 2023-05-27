import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { Post } from "../../App";
import { useSelectedPost } from "./hooks/selectedPost";
import { EditPost } from "./editPost";


export const SinglePost = () => {

    const{
        post,
        isReadOnly,
        handleEdit
    } = useSelectedPost()

    return(
        <section className="post">
            <h2>Post: {post.id}</h2>
            <h2>{post.title}</h2>
            <span>{post.body}</span>
            <button className="edit-button" onClick={handleEdit}>EDIT</button>
            <EditPost 
            post={post}
            isReadOnly={isReadOnly}
            />
        </section>
    )
};