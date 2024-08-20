
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react"
import { ChatCard } from "./ChatCard";

export const ChatList = ({doctorId , userId}) => {

  console.log("hiiii");

  const navigate = useNavigate();

  const [appointmentList ,setAppointmentList] = useState([]);
  
  async function fetchAppointments(){
   
       const response = await axios.get(`${BACKEND_URL}/api/appointment/doctorId/${doctorId}`);
  
       setAppointmentList(response.data);

       console.log(response.data);
  }

  useEffect( ()=>{
    
    fetchAppointments();

  },[doctorId]);

  // async function fetchChat(appointmentId){
    
             
  //   const responseChat = await axios.get(`${BACKEND_URL}/api/${appointmentId}/allChats`);
    

  //   return responseChat.data;

  // }
  
  return (
      <>
         {appointmentList.map((appointment,index) => {

          return(


            <div className="bg-red-500" key={index} >
                  
                  <FetchChat userId={userId} appointmentId={appointment.id} patientName={appointment.firstName}/>
                  
                </div> 
          )
               
                  
              
                        
          })}
      </>

     
  )
  }

  const FetchChat = ({appointmentId, userId ,patientName}) => {
    console.log("hiii")

    const [chatList , setChatList] = useState([]);

    async function fetchChat(){
      try{

        const response = await axios.get(`${BACKEND_URL}/api/${appointmentId}/allChats`);
        setChatList(response.data);
        console.log(response.data);
        console.log("phuch ya na yha fetchChat m");

      }catch(e){
        alert("error while fetching chats in fetchChat");
      }
        
    }

    useEffect(()=>{

      fetchChat();

    },[appointmentId]);

    return(
      <div className="flex justify-center bg-teal-50 mt-16">
      <div className="px-8 py-3 w-3/4">
        <ul role="list">
          {chatList.length > 0 && (
            <div>
              <ChatCard chat={chatList} userId={userId} appointmentId={appointmentId} patientName={patientName}/>
            </div>
          )}
        </ul>
      </div>
    </div>
    
    )
  }


