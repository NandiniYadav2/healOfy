import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const CreatePostDoc = () => {

    const {doctorName} = useParams();
    const[newPost, setNewPost] = useState({
        title:"",
        description:"",
        content:"",
        name:doctorName

    });
 
    return(<div className=" px-40 flex flex-col bg-teal-50 w-full h-screen">

             
       <div className="w-full mb-4 mt-10 border border-gray-200 rounded-t-3xl bg-teal-200 dark:bg-teal-50 dark:border-teal-100">
           <div className="px-8  py-5 bg-teal-100 rounded-3xl dark:bg-teal-400">
               
               <textarea onChange={(e)=>{
                setNewPost({
                    ...newPost,
                    title: e.target.value
                });
               }} rows="3" className="w-full px-4 mt-4 text-sm rounded-xl text-teal-900 focus:ring-teal-400 bg-teal-50 border-0 dark:bg-teal-100 focus:ring-2 dark:text-teal-800 dark:placeholder-teal-800" placeholder="Title.." required ></textarea>
               <textarea onChange={(e)=>{
                setNewPost({
                    ...newPost,
                    description: e.target.value
                });
               }} rows="5" className="w-full px-4 mt-4 text-sm  rounded-xl text-teal-900 focus:ring-teal-400 bg-teal-50 border-0 dark:bg-teal-100 focus:ring-2 dark:text-teal-800 dark:placeholder-teal-800" placeholder="Description.." required ></textarea>
               <textarea onChange={(e)=>{
                setNewPost({
                    ...newPost,
                    content: e.target.value
                });
               }} rows="10" className="w-full px-4 my-4 text-sm rounded-xl text-teal-900 focus:ring-teal-400 bg-teal-50 border-0 dark:bg-teal-100 focus:ring-2 dark:text-teal-800 dark:placeholder-teal-800" placeholder="Content of your post.." required ></textarea>
           
           </div>
           
        </div>

        <div>
            <button onClick={async ()=>{
          
              const response = await axios.post(`${BACKEND_URL}/api/posts/createPost`,newPost,{
                  headers:{
                      Authorization: `Bearer ${localStorage.getItem('token')}`
                  }
              });
              console.log(response);

              if(response){
                alert("post created !!!");
              }
          
      
          
    
    
          }}class="px-4 py-4 bg-teal-800 text-gray-100 font-extrabold rounded-xl hover:bg-teal-500" >Create Post</button>
       </div>
     </div>)
    }

       
    
       
    
    
    
    