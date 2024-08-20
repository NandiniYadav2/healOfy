import axios from "axios";
import { BACKEND_URL } from "../config";

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AppointmentList } from "./AppointmentList";

export const PatientListDoc = ({doctorId}) => {

  const [appointmentList ,setAppointmentList] = useState([]);
  const navigate = useNavigate();

  
  async function testy(){
  
    
        const response = await axios.get(`${BACKEND_URL}/api/appointment/doctorId/${doctorId}`);
  
        setAppointmentList(response.data);
     
    
    
  }
  useEffect( ()=>{
    
    testy();

  },[doctorId]);
  
  
    return (
      <div className="flex justify-center bg-teal-50 mt-16 ">
      <div className="bg-teal-400  rounded-2xl p-8 w-3/4 p-5">
      <ul role="list" className="divide-y divide-gray-200">
        {appointmentList && appointmentList.map((patient,index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex  w-1/2">

            <div>
              
                <button onClick={()=>{
                     navigate(`/patientProfile/${patient.patientId}`);
                }}>
                    <img className="h-12 w-12 mr-3 flex-none rounded-full bg-gray-50 focus-cursor" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
            <div className="flex flex-col min-w-0 gap-x-4">
             
              <div className="min-w-0 flex">
                <p className="text-sm font-semibold leading-6 text-gray-900">{patient.firstName} </p><p className="text-teal-400">h</p>
                <p className="text-sm font-semibold leading-6 text-gray-900">{patient.lastName}</p>
                <div className="ml-4">   <p className="text-sm leading-6 text-gray-800">{patient.age}</p></div>
                
              </div><p className="text-sm leading-6 text-gray-900 mt-1">Email: {patient.email}</p>
            </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col  sm:items-start  w-1/3">
              <p className="text-sm leading-6 text-gray-900">severity : {patient.severity}</p>
             
              <p className="text-sm leading-6 text-gray-900 mt-1">Appointment Date : {patient.date.substring(0,10)}</p>
             
            </div>
          </li>
        ))}
      </ul>
      </div>
      </div>
    )
  }