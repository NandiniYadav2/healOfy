import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const ChatCard = ({chat, appointmentId, userId ,patientName}) => {

    const navigate = useNavigate();

    console.log(`$aaya chat : ${chat[0]}`);
   
    return(

    <div> 
        <div className="flex justify-between p-4 border-b   border-slate-200 pb-4 w-full  cursor-pointer bg-teal-400 rounded-3xl mt-3">
          <Link to={`/chat/${userId}/${appointmentId}/${patientName}`}>
            <div className="flex  ml-4 w-full">
               <div className="flex flex-col mr-2  pl-2 ">
                   <Avatar name={patientName} />
                   
               </div>
               <div className="w-full">
                  <div className="flex">
                      <div className="text-xl flex flex-col justify-center text-3xl font-bold px-2 pb-2">
                         {patientName}
                      </div>
                      {/* <div className="text-md font-thin flex text-base flex-col justify-center pl-3 pt-1 mr-10">
                          {chat[0].age}
                      </div> */}
                  </div>
                  <div className="flex justify-between w-full bg-teal-100 rounded-2xl p-1 px-4">
                       <div className="mt-2 "> {chat[0].content}</div>
                       <div className="mt-2 ">{chat[0].sentAt}</div>
                      
                  </div>

                  
               </div>
            
            </div>
          </Link>
{/*            
            <div className="flex justify-between text-center mt-4 ml-4"> 
                   <div>
                       <button onClick={()=>{
                           navigate(`chat/${chat.id}`);
                       }} type="button"  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Chat Now</button>
                    </div>

                    <div>
                    
                    </div>
              

            </div>
             */}
        </div>
 
    </div>

)}

export function Avatar({ name, size = "small" }) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-8 h-8">
    <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>
}