import { useEffect, useState } from "react"
import reactLogo from "../assets/react.svg"
import { useParams, useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";


export const DoctorProfileCard = () => {
    const[doctorInfo , setDoctorInfo] = useState({});
    const {id} = useParams();
    


    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/doctor/${id}`);
        setDoctorInfo(response.data);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };
    
    useEffect(() => {
      fetchDoctorData();
    },[id]);

  return (
    <div className="bg-teal-50 flex justify-center">
        <div className="flex justify-center flex-col w-1/2">
    
    <div className="mt-10 mb-10 bg-teal-400 p-5 border text-lg rounded-3xl p-8">
      <div className="px-4 sm:px-0">
        <div className="flex">
          <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-10 h-10 rounded-full mr-3" alt="Logo" />
          <h3 className=" font-bold leading-7 text-3xl text-gray-900">{doctorInfo.firstName} {doctorInfo.lastName}</h3>
        </div>
      
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-700 ml-14">Degree / Speciality</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Dr. {doctorInfo.firstName} {doctorInfo.lastName}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Academic Qualifications</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">MS , University Name</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Specialisation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">NA</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Experience</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{doctorInfo.exp}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Age</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{doctorInfo.age}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{doctorInfo.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">License ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{doctorInfo.licenseId}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            A competent ENT Surgeon practising for the past 13 years and having a wide range 
            of experience in treating patients with all kinds of ENT issues. Listens to and addresses 
            all of the patients' concerns and clearly explains the course of treatment.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Contact No</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">xxxxxxxxx</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Clinic Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Delhi Road, New Delhi, India, 100000</dd>
          </div>
          
        </dl>
      </div>
    </div>
    </div>
    </div>
  )
}

