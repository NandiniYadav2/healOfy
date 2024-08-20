import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { PostCard } from "./PostCard";

 export const AllPost = () => {
    const [allPosts, setAllPosts] = useState([]);

    async function postyy(){
        
        const response = await axios.get(`${BACKEND_URL}/api/posts/allPosts`);
        
        setAllPosts(response.data.content);
        
    }

    useEffect(() => {
        
        postyy();
        
    },[]);
    console.log(allPosts);

    return(
        <div className="mt-10">

        {allPosts && allPosts.map((onePost,index)=>{
            
               return(
                <div>
                   
                    
                    <PostCard  title={onePost.title} content={onePost.content} createdAt={onePost.createdAt} id={onePost.id}  name={onePost.name} flag={onePost.flag}/>
                   
                   

                </div>
               ) 

           
        })}

        </div>
    )


 }