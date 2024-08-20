import { useEffect, useState } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";
import { SinglePostMod } from "../Components/SinglePostMod";
export const PostMod = () => {
    const {id} = useParams();
   console.log
    
    return<div className="flex flex-col items-center h-full w-screen bg-teal-50">
        
         <SinglePostMod id={id}/>
        
         {/* <SinglePost/> */}

        
      </div>
}