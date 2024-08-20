
import { SidebarElement } from "../Components/SidebarElement"
import { Navbar } from "../Components/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useEffect, useState } from "react"

export const DoctorDashboard = () => {
    const {userId, doctorId} = useParams();
    const [doctor , setDoctor] = useState({});

    async function  fetchDoctor(){
        
        const response = await axios.get(`${BACKEND_URL}/api/admin/doctor/${doctorId}`);
        setDoctor(response.data);
    }

    useEffect(()=>{
        fetchDoctor();
    },[userId]);

    return<div>
        {/* <Navbar/> */}
        <SidebarElement doctor={doctor} userId={userId}/>
    </div>
}