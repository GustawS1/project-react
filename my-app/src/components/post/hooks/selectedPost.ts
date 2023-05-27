import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../../App";

type SelectedPostData = {
    post: PostType,
    isReadOnly: boolean,
    handleEdit: () => void,
};


export const useSelectedPost = (): SelectedPostData => {

    const [post, setPost] = useState<PostType>({
        title: '',
        body: ''
    });

    const [isReadOnly, setIsReadOnly] = useState(false)

    const {id} = useParams();

    const fetchData = async () => {
        try{
            const response = await fetch(`https://dummyjson.com/posts/${id}`);
            const data = await response.json();
            if(!response.ok) throw Error('Something went wrong!');
            setPost(data)
            console.log(data)
        } catch (error){
            console.log(error)
            console.log(id)
        }
    };

    const handleEdit = () => setIsReadOnly((prev) => !prev);



    useEffect(() => {
        fetchData();
        console.log(id)
    }, [id]);



    return{
        post,
        isReadOnly,
        handleEdit
    }
}