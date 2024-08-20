import { DoctorProfileCard } from "../Components/DoctorProfileCard"
import {PatientProfile } from "../Components/PatientProfile"
import { PatientCard } from "../Components/PatientCard"
import { PatientList } from "../Components/PatientList"

export const Sample = () => {
    return<div className="">
        <div >
           <DoctorProfileCard/>
           
        </div>
        <div><PatientProfile/></div>
        <div><PatientCard/></div>
        <div><PatientList/></div>
        <div><PostCard authorName={"joe"}  title={"this is my first post"} content={"description of the post description of the post description of the post description of the post description of the post vdescription of the post vvdescription of the post "} publishedDate={"06 Apr 24"} id={2}/></div>
        
    </div>
}