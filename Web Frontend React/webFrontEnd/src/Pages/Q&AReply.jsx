import { useEffect, useState } from "react";
import axios  from "axios";
import { useParams } from "react-router-dom";
import { SingleQAndA } from "../Components/SingleQ&A";
export const QAndAReply = () => {
    const {id} = useParams();
   console.log
    
    return<div className="flex flex-col items-center h-full w-screen bg-teal-50">
        
         <SingleQAndA id={id}/>
        
         {/* <SinglePost/> */}

        
      </div>
}