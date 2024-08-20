
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react"
import { AppointmentCard } from "./AppointmentCard";

export const AppointmentList = ({doctorId, userId}) => {

  const navigate = useNavigate();

  const [appointmentList ,setAppointmentList] = useState([]);
  
  async function fetchAppointments(){
   
       const response = await axios.get(`${BACKEND_URL}/api/appointment/doctorId/${doctorId}`);
  
       setAppointmentList(response.data);
  }

  useEffect( ()=>{
    
    fetchAppointments();

  },[doctorId]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  // Example usage:
  
  
  return (
    <div className="flex justify-center bg-teal-50 mt-16 ">
    <div className="px-8 py-3 w-3/4 ">
      <ul role="list">
         {appointmentList.map((appointment,index) => {
          
            const date = new Date();
            const currDate = formatDate(date);

            let appointDate=`${appointment.date}`;
            appointDate =  appointDate.substring(0,10);

            console.log(appointDate);

          if(currDate <= appointDate ){
            return(

                <div key={index} >
                  <AppointmentCard appointment={appointment} userId={userId}/>
                </div>   
              
            
              )
          }
            
})}

     </ul>
   </div>
   </div>
  )
  }



            //   <li  className="flex justify-between gap-x-6 py-5">
            //      <div className="flex min-w-0  gap-x-4">
            //         <div>
            //           <button onClick={()=>{
            //               navigate(`/doctorProfile/${doctor.id}`)
            //           }}>
            //             <img className="h-12 w-12 flex-none rounded-full bg-gray-50 focus-cursor" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            //           </button>
            //         </div>
            //         <div>
            //            <div className=" flex justify-between  min-w-0 flex-auto mb-3">
            //                <p className="text-sm font-semibold leading-6 text-gray-900">{doctor.firstName}</p><p className="text-teal-400 "> ** </p>
            //                <p className="text-sm font-semibold leading-6 text-gray-900">{doctor.lastName} </p>
            //               <div className="flex text-teal-400 font-2xl"> *** <p className="mt-1 truncate text-xs leading-5 text-gray-700">{doctor.age}</p></div>
            //           </div>
            //           <div><p className="text-sm leading-6 text-gray-900">License Id : {doctor.licenseId}</p></div>
            //            <div> <p className="text-sm leading-6 text-gray-900">Experience : {doctor.exp}</p></div>
            //        </div> 
            //      </div>

            //      <div className="flex flex-col justify-center">
                       
            //            <button onClick={async ()=>{
                         
            //                 // try{
            //                 //     const response = await axios.delete(`${BACKEND_URL}/api/doctor/${doctor.id}`,{
            //                 //         headers:{
            //                 //              Authorization: `Bearer ${localStorage.getItem('token')}`
            //                 //         }
            //                 //   });
            //                 //  console.log(response);
            //                 // }catch(e){
            //                 //      alert("something went wrong");
            //                 // }

            //                 try{
            //                   const response = await axios.put(`${BACKEND_URL}/api/doctor/${doctor.id}`,{
                        
            //                     firstName:`${doctor.firstName}`,
            //                     lastName :`${doctor.lastName}`,
            //                      age:`${doctor.age}`,
            //                      exp:`${doctor.exp}`,
            //                      licenseId:`${doctor.licenseId}`,
            //                      isModerator:`${doctor.isModerator}`,
            //                      isApproved:true
                            
            //                     },{
            //                     headers:{
            //                          Authorization: `Bearer ${localStorage.getItem('token')}`
            //                     }
            //               });
            //              console.log(response);
            //             }catch(e){
            //                  alert("something went wrong");
            //             }

            //           }}class="px-2 py-1 bg-teal-800 text-gray-100 font-bold rounded-xl hover:bg-teal-700 h-12" >Remove Doctor</button>
            //     </div>
              
            // </li>