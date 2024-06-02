"use client";
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import Hero from './components/Hero'

const PostDetails = () => {
    const [post, setPost ] = useState();
    const { id } = useParams();

    useEffect(() => {
        const getSinglePost = async () => {
            try {
               const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
               const data = await response.json()
               setPost(data);
            } catch (error) {
                console.log("error: ", error)
            }
        }

       getSinglePost(); 
      
    }, [id]);


    return (
        <div className='h-screen '>
            <Hero
                title={post?.title}
                body={post?.body}
            />
           
        </div>
      );
}
 
export default PostDetails;