import { useState } from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import { DoctorDashboard } from './Pages/DoctorDashboard'
import { Sample } from './Pages/Sample'
import {Post} from './Pages/Post'
import { PostMod } from './Pages/PostMod'
import { AllPatient } from './Pages/AllPatient'

import { RenderPost } from './Pages/RenderPost'
import { Appointments } from './Pages/Appointments'
import { AdminDashboard } from './Pages/AdminDashboard'
import { ModeratorDashboard } from './Pages/ModeratorDashboard'
import {Role} from './Pages/Role'
import { DoctorProfileCard } from './Components/DoctorProfileCard'
import {PendingDocRequest} from './Pages/PendingDocRequest'

import { AllDoctors } from './Pages/AllDoctors'
import { Trial } from './Pages/Trial'

import { PatientProfile } from './Components/PatientProfile'
import { ChatSample } from './Pages/ChatSample'
import  {CreatePostDoc} from './Pages/CreatePostDoc'
import { QAndAReply } from './Pages/Q&AReply'





function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>

            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/doctordashboard/:userId/:doctorId' element={<DoctorDashboard/>}></Route>
            <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
            <Route path='/moderatordashboard' element={<ModeratorDashboard/>}></Route>

            <Route path='/sample' element={<Sample/>}></Route>

            <Route path='/q&aReply/:id' element={<QAndAReply/>}></Route>
            <Route path='/post/:id' element={<Post/>}></Route>
            <Route path='/postmod/:id' element={<PostMod/>}></Route>
            <Route path='/allPatient' element={<AllPatient/>}></Route>
            <Route path='/allPosts' element={<RenderPost/>}></Route>
            <Route path='/allDoctors' element={<AllDoctors/>}></Route>


            <Route path='/appointments' element={<Appointments/>}></Route>\
            <Route path='/patientProfile/:id' element={<PatientProfile/>}></Route>

            <Route path='/admindashboard' element={<AdminDashboard/>}></Route>
            <Route path='/moderatordashboard' element={<ModeratorDashboard/>}></Route>

            <Route path='/role/:userId/:doctorId' element={<Role/>}></Route>
            <Route path='/doctorProfile/:id' element={<DoctorProfileCard/>}></Route>
            <Route path='/pendingdocRequest' element={<PendingDocRequest/>}></Route>
            <Route path='/chat/:userId/:appointmentId/:patientName' element={<ChatSample/>}></Route>
            <Route path='/createPostDoc/:doctorName' element={<CreatePostDoc/>}></Route>
           

           


            

         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
