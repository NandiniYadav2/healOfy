import { useEffect, useState } from "react";
import axios  from "axios";
import { CommentCardMod } from "./CommentCardMod";

import { BACKEND_URL } from "../config";


export const SinglePostMod = ({id}) => {

    const [postDetails,setPostDetails] = useState({});
    
    
    async function fetchPost(){

         try{
               const response = await axios.get(`${BACKEND_URL}/api/posts/post/${id}`);
               setPostDetails(response.data);
              
                   
             } catch(e) {
                    alert("Error while loading")
            }     
    }
   
    useEffect(()=>{
        fetchPost();

       
    },[id]);

    async function handleOnCLick(){
                    
        const response = await axios.put(`${BACKEND_URL}/api/posts/post/${postDetails.id}`,{

           flag:'1',

          },{
          headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      });
      console.log(response);

      if(response){
        alert("flagged successfully");
      }
         

     }
    

    console.log(postDetails.comments);
    
    return<div className="bg-teal-50 w-full flex justify-center">
    <div className="w-11/12 h-screen bg-teal-50">
        <div className=" w-full h-full bg-teal-50 ">
            <div className="flex  justify-center text-white  bg-teal-800 w-full h-16 mt-3 rounded-t-3xl text-3xl font-black p-3 mt-12">{postDetails.title}</div>
            <div className="flex flex-col justify-center bg-teal-400 w-full rounded-b-3xl px-10  h-2/5">
               <div className="mb-2 text-2xl font-bold text-teal-700 mt-5">{postDetails.description}</div> 
               <div className="mb-10 text-slate-600 mt-3">{postDetails.content}</div>
               <div className="flex justify-end text-center w-full mt-4 h-16"> 
              
                   <button type="button" class="focus:outline-none text-white bg-teal-800 hover:bg-teal-100 focus:ring-2 focus:ring-teal-100 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-700 dark:hover:bg-teal-500 dark:focus:ring-teal-800">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                      </svg>
                   </button>
             
                   <button onClick={async()=>{
                       
                       const response = await axios.put(`${BACKEND_URL}/api/posts/post/${postDetails.id}`,{
                        
                        flag:'1'
                       },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });

                    if(response){
                      alert("flagged");
                    }

                   }} type="button" class="focus:outline-none text-white bg-teal-800 hover:bg-teal-100 focus:ring-2 focus:ring-teal-100 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-700 dark:hover:bg-teal-500 dark:focus:ring-teal-800">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                      </svg>
                   </button>
                </div>
            </div>
            
            <div className="mt-6 ">
                <div> 
                    
                    <CommentTextArea id={id}/>
                </div>
            </div>
           
            <div className="bg-teal-400 rounded-b-3xl mt-6 "> 
              <div className="bg-teal-700 text-md font-bold px-6 py-2 text-gray-50">Comments</div> 
                <div className=" m-8 pb-10">

             
                {postDetails.comments && postDetails.comments.map((comment)=>{
                    return(
                      <div className=" w-full flex  justify-center  mt-2">
                           <CommentCardMod comment={comment} postId={id}/>
                      </div>
                    )
                })}
           

                    {/* <div className=" w-full flex  justify-center  mt-2">
                      <CommentCard comment={cmnt} postId={id}/>
                    </div>
                    <div className=" w-full flex  justify-center  mt-2">
                      <CommentCard comment={cmnt} postId={id}/>
                    </div>
                    <div className=" w-full flex justify-center  mt-2">
                      <CommentCard comment={cmnt} postId={id}/>
                    </div>
                    <div className=" w-full flex  justify-center  mt-2">
                      <CommentCard comment={cmnt} postId={id}/>
                    </div>
                   
                */}

                </div>       
             </div>  
           </div>
    </div>
    </div>
}

function CommentTextArea({id}){

    const[newComment, setNewComment] = useState("hi");

    return(<>
        
   <div className="w-full mb-4 border border-gray-200 rounded-t-3xl bg-teal-200 dark:bg-teal-700 dark:border-teal-100">
       <div className="px-5 py-4 bg-teal-100 rounded-t-3xl dark:bg-teal-400">
           
           <textarea onChange={(e)=>{
            setNewComment(e.target.value);
           }} rows="4" className="w-full px-4 text-sm text-teal-900 focus:ring-teal-400 bg-teal-50 border-0 dark:bg-teal-100 focus:ring-2 dark:text-teal-800 dark:placeholder-teal-800" placeholder="Write a comment..." required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-1.5 border-t dark:border-gray-600">
           <button onClick={async ()=>{
                   const response = await axios.post(`${BACKEND_URL}/api/posts/${id}/createComment`,{
                     name:"Piyush ",
                     email:"nandinin@gmail.com",
                     body:`${newComment}`

                   },{
                        headers:{
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                   });

                

           }} type="submit" className="inline-flex items-center py-2 px-4 text-md font-extrabold text-center text-white bg-teal-900 rounded-lg focus:ring-2 focus:ring-teal-900 dark:focus:ring-teal-900 hover:bg-teal-500">
               Post comment
           </button>
          
       </div>

       
   </div>

    </>)




}