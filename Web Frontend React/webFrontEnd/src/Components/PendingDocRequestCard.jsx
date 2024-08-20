import { Link } from "react-router-dom";
import { DoctorProfileCard } from "./DoctorProfileCard";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const PendingDocRequestCard = ({doctor}) => {
   
    return(

    <div> 
        <div className="flex justify-between p-4 border-b   border-slate-200 pb-4 w-full  cursor-pointer bg-teal-400 rounded-3xl mt-3">
          <Link to={`/doctorProfile/${doctor.id}`}>
            <div className="flex  ml-4">
               <div className="flex flex-col mr-3 pt-1 pl-2 ">
                   <Avatar name={doctor.firstName} />
                   
               </div>
               <div >
                  <div className="flex">
                      <div className="text-xl flex flex-col justify-center text-2xl font-bold ">
                         {doctor.firstName}
                      </div>
                      <div className="text-md font-thin flex text-base flex-col justify-center pl-3 pt-1 mr-10">
                          {doctor.age}
                      </div>
                  </div>

                  <div className="mt-2 ">LicenseId : {doctor.licenseId}</div>
               </div>
            
            </div>
          </Link>
           
            <div className="flex justify-between text-center mt-4 ml-4"> 
                   <div>
                       <button onClick={async()=>{
                          try{
                            const response = await axios.put(`${BACKEND_URL}/api/doctor/${doctor.id}`,{
                          
                                 approved:1
                            
                                },{
                                headers:{
                                     Authorization: `Bearer ${localStorage.getItem('token')}`
                                }
                          });
                          }catch(e){
                             alert("something went wrong");
                          }

                       }} type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Approve</button>
                    </div>

                    <div>
                    <button onClick={async()=>{
                        try{
                            const response = await axios.put(`${BACKEND_URL}/api/doctor/${doctor.id}`,{
                          
                                //  firstName:`${doctor.firstName}`,
                                //  lastName :`${doctor.lastName}`,
                                //  age:`${doctor.age}`,
                                //  exp:`${doctor.exp}`,
                                //  licenseId:`${doctor.licenseId}`,
                                //  moderator:`${doctor.isModerator}`,
                                 flag:1
                            
                                },{
                                headers:{
                                     Authorization: `Bearer ${localStorage.getItem('token')}`
                                }
                          });
                          }catch(e){
                             alert("something went wrong");
                          }
                         
                    }}type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Decline</button>
                    </div>
              

            </div>
            
        </div>
 
    </div>

)}



function Avatar({ name}) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-8 h-8">
    <span className= "text-md font-extralight text-gray-600 dark:text-gray-300">
        {name[0].toUpperCase()}
    </span>
</div>
}