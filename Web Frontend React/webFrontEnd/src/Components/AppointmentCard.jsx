import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AppointmentCard = ({appointment, userId}) => {

    const navigate = useNavigate();
   
    return(

    <div> 
        <div className="flex justify-between p-4 border-b   border-slate-200 pb-4 w-full  cursor-pointer bg-teal-400 rounded-3xl mt-3">
          <Link to={`/patientProfile/${appointment.patientId}`}>
            <div className="flex  ml-4">
               <div className="flex flex-col mr-3 pt-1 pl-2 ">
                   <Avatar name={appointment.firstName} />
                   
               </div>
               <div >
                  <div className="flex">
                      <div className="text-xl flex flex-col justify-center text-2xl font-bold ">
                         {appointment.firstName}
                      </div>
                      <div className="text-md font-thin flex text-base flex-col justify-center pl-3 pt-1 mr-10">
                          {appointment.age}
                      </div>
                  </div>
                  <div>
                       
                       <div className="mt-2 ">Severity : {appointment.severity}</div>
                       <div className="mt-2 ">Appointment Date : {appointment.date.substring(0,10)}</div>
                       <div className="mt-2 ">Time Slot : {appointment.time} AM</div>
                  </div>

                  
               </div>
            
            </div>
          </Link>
           
            <div className="flex justify-between text-center mt-4 ml-4"> 
                   <div>
                       <button onClick={()=>{
                           navigate(`/chat/${userId}/${appointment.id}/${appointment.firstName}`);
                       }} type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Chat Now</button>
                    </div>

                    <div>
                    <button onClick={async()=>{
                        try{
                            const response = await axios.delete(`${BACKEND_URL}/api/appointment/${appointment.id}`,{
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

export function Avatar({ name, size = "small" }) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-6 h-6">
    <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>
}