import { useEffect, useState } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";
import { SinglePost } from "../Components/SinglePost";
export const Post = () => {
    const {id} = useParams();
   console.log
    
    return<div className="flex flex-col items-center h-full w-screen bg-teal-50">
        
         <SinglePost id={id}/>
        
         {/* <SinglePost/> */}

        
      </div>
}