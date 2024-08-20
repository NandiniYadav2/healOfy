


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../config";


    
    export const PatientProfile = () => {

      const[patientInfo ,setPatientInfo] = useState({});
      const {id} = useParams();
      

      async function fetchPatient(){
        try{
          const response = await axios.get(`${BACKEND_URL}/api/patient/${id}`);
          setPatientInfo(response.data);
        }catch (error) {
          console.error('Error fetching patient data:', error);
        }
          

      }

      useEffect(()=>{
        fetchPatient();
      },[id]);

      return (
        <div className="bg-teal-50 flex justify-center">
            <div className="flex justify-center flex-col w-1/2">
        
        <div className="mt-10 pt-10 pl-8 pr-8 pb-8 mb-10 bg-teal-400 p-5 border text-lg rounded-3xl">
          <div className="px-4 sm:px-0">
            <div className="flex">
              <img src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' className="w-10 h-10 rounded-full mr-3" alt="Logo" />
              <h3 className=" font-bold leading-7 text-3xl text-gray-900">{patientInfo.firstName}  {patientInfo.lastName}</h3>
            </div>
          
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full Name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{patientInfo.firstName}   {patientInfo.lastName}</dd>
              </div>
             
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Age</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{patientInfo.age}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{patientInfo.email}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Contact No</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">xxxxxxxxx </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Severity</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{patientInfo.severity}</dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{patientInfo.address}</dd>
              </div>
              
            </dl>
          </div>
        </div>
        </div>
        </div>
      )
    }
    
    