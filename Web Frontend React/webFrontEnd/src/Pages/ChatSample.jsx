import axios from "axios"
import { useNavigate , useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import { BACKEND_URL } from "../config";



export const  ChatSample = () => {

     const {userId , appointmentId ,patientName} = useParams();

     const[chatList , setChatList] = useState([]);

     const[sendText , setSendText] = useState();

     async function fetchChat() {
        try {
          if (appointmentId) { 

            const response = await axios.get(`${BACKEND_URL}/api/${appointmentId}/allChats`);
            setChatList(response.data);

            console.log(response.data);
            console.log("phucha chat sample");

          }
        } catch (error) {
          console.error("Error while fetching chats in ChatSample:", error);
      
        }
      }
    
  
      useEffect(()=>{
  
        fetchChat();
  
      },[appointmentId]);

    return(
        
        <div className="bg-teal-400 h-screen flex justify-center flex-col">
            <div className="flex w-full justify-center px-12 mt-10">
                    
                <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-teal-400 text-gray-800 p-10">

                      <div className="flex flex-col flex-grow w-full max-w-3xl bg-teal-100 shadow-xl rounded-lg overflow-hidden mb-10">
                          <div className="flex bg-teal-700">
                             <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 m-3"><Avatar name={patientName}/></div>
                             <div className="flex flex-col justify-center">{patientName}</div> 
                          </div>
                         


                          <div className="flex flex-col  flex-grow h-0 p-4 overflow-auto">

                          <li>
                            {chatList && chatList.map((chat) => {
                             return (
                              <>
                                  {chat.roleId === 1 ? (
                                     <div className="flex w-full mt-2 space-x-3 max-w-xs ">
                                       <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-300"><Avatar name={chat.name}/></div>
                                        <div>
                                           <div className="bg-teal-200 p-3 rounded-r-lg rounded-bl-lg">
                                                 <p className="text-sm">{chat.content}</p>
                                           </div>
                                          <span className="text-xs text-gray-500 leading-none">{chat.sentAt}</span>
                                      </div>
                                   </div>
                               ) : (
                                    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                        <div>
                                        <div className="bg-teal-500 text-black p-3 rounded-l-lg rounded-br-lg">
                                            <p className="text-sm">{chat.content}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 leading-none">{chat.sentAt}</span>
                                        </div>
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-400"><Avatar name={chat.name}/></div>
                                    </div>
                               )}
                            </>
                           );
                         })}
                      </li>

                             
                        </div> 
                        <div className="flex bg-teal-700 p-4">
                             <input onChange={(e)=>{
                                setSendText(e.target.value);
                             }} className="flex items-center h-10 w-full bg-teal-100 rounded px-3 text-sm text-teal-900" type="text" placeholder="Type your message…"/>

                             <button  onClick={async ()=>{

                                try{
                                    let date = new Date();
                                    const response = await axios.post(`${BACKEND_URL}/api/${appointmentId}/${userId}/createChat`,{
                                
                                        name:"Aparna",
                                        content:`${sendText}`,
                                        sentAt:date,
                                        roleId:3

                                    
                                        },{
                                        headers:{
                                            Authorization: `Bearer ${localStorage.getItem('token')}`
                                        }

                                        
                                });

                                // console.log(response);

                                if(response){
                                    window.location.reload();
                                }

                                }catch(e){
                                    alert("something went wrong");
                                }

                             }} className="bg-teal-100 rounded-lg px-3 py-2 ml-1">send</button>
                        </div>
                    
                 </div>

            </div>
 
                      
                
                    
        </div>
        
    
    </div>
    )
}


export function Avatar({ name}) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden  rounded-full w-10 h-10">
    <span className="text-md font-bold text-teal-900 dark:text-teal-900">
        {name[0]}
    </span>
</div>
}



    
    
 {/* <div className="flex w-full mt-2 space-x-3 max-w-xs">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-300"></div>
                                  <div>
                                       <div className="bg-teal-200 p-3 rounded-r-lg rounded-bl-lg">
                                           <p className="text-sm">hiii </p>
                                       </div>
                                      <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                  </div>
                              </div>
                             <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                                <div>
                                    <div className="bg-teal-500 text-black p-3 rounded-l-lg rounded-br-lg">
                                        <p className="text-sm">some text from doctor</p>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                </div>
                               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-400"></div>
                             </div> */}