import { useEffect, useState } from "react";
import { AppointmentCard } from "../Components/AppointmentCard";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Appointments = () => {
    const [appointments,setAppointments] = useState([]);

    async function fetching(){
        const response = await axios.get(`${BACKEND_URL}/api/allAppointments`);
        setAppointments(response.data);
    }

    useEffect(()=>{
        fetching();
    },[])
    
    return(
        <>
            {appointments.map((appointment,index)=>{
                return(
                    <div key={index}>
                        <AppointmentCard firstName={appointment.firstName} lastName={appointment.lastName} age={appointment.age} email={appointment.email} severity={appointment.severity} date={appointment.date}/>
                    </div>
                )
            })}
            
        </>
    )
}