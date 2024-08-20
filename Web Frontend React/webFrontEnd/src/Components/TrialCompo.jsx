import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios";



export const TrialCompo = ({id})=>{
   const [doctoInfo , setDoctoInfo] = useState({});

   async function fetchD(){
      const response = await axios.get(`${BACKEND_URL}/api/doctor/${id}`);
      setDoctoInfo(response.data);
   }

   useEffect(()=>{
    fetchD()
   },[id]);
    return (
        <div className="mt-16">{doctoInfo.firstName}  </div>
    )
}