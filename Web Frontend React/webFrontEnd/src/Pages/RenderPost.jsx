import { useEffect, useState } from "react";
import axios  from "axios";
import { AllPostMod } from "../Components/AllPostMod";
export const RenderPost = () => {

   
    
    return<div className="flex flex-col items-center h-full w-screen bg-teal-50">
         <AllPostMod/>

        
      </div>
}