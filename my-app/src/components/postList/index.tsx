import React from "react";
import { useState } from "react";
import { SinglePost } from "../post";
import { Post } from "../../App";
import { Link, Route, Routes, useParams } from "react-router-dom";

export type postListProps = {
    posts: Post[]
}

export const PostList = ({posts}: postListProps) => {


    return(
        <>
            <h1>Posts list</h1>
            <ul className="posts-list">
            {posts.map(({id, title, body}) => (
                <li key={id} className="post-list-item">
                    <h3 className="post-list-h2">{title}</h3>
                    <span className="post-body">{body}</span>
                        <div className="go-to-post">
                        <Link to={`/posts/${id}`} className="post-link">Go to post</Link>
                        </div>
                </li>
            ))}
            </ul>
                <div className="create-new-post">
                <Link to='/posts/new' className='post-link'>Add</Link>
                </div>
        </>
    )
};