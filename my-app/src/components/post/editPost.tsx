import React from "react";
import { useSelectedPost } from "./hooks/selectedPost";
import { Post } from "../../App";

type EditPostProps = {
    post: Post
    isReadOnly: boolean,
}

export const EditPost = ({post, isReadOnly}:EditPostProps)=> {


    if(isReadOnly == true){
    return(
        <section className="post">
            <label className="edit-label">Edit title:</label>
            <input type="text" value={post.title}/>
            <label className="edit-label">Edit text:</label>
            <textarea value={post.body}></textarea>
            <span></span>
            <div className="go-to-post">
                Save
            </div>
        </section>
    )
    } else {
        return(
            null
        )
    }
}