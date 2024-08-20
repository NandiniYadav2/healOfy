import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL2 } from "../config";

export const DocRegistration = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        firstName: "",
        lastName:"",
        age: "",
        exp:"",
        licenseId: "",
        username: "",
        password: "",
        email: "",
       
        
    });

    // function sendRequest(){
    //     navigate("/doctordashboard");
    // }

    {/* -->post to backend  login endpoint*/}
    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL2}/api/auth/doctor/register`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/signin");
        } catch(e) {
            alert("Error while signing up")
            // alert the user here that the request failed
        }
    }
    

    return <div className="h-screen flex justify-center flex-col bg-teal-50">
        <div className="flex justify-center">
            <div className=" w-7/12 flex justify-center flex-col">
                <div className="px-10 ">
                    <div className="text-3xl font-extrabold text-center text-teal-600">
                        Sign Up
                    </div>
                    <div className="text-slate-500 text-center">
                        Already have an account?
                        <Link className="pl-2 underline text-teal-400" to={"/signin"}>
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="First Name" placeholder="Joe" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            firstName: e.target.value
                        })
                    }} />
                    <LabelledInput label="Last Name"  placeholder="warn" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            lastName: e.target.value
                        })
                    }} />
                   
                </div>
                <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="Email" placeholder="abc@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    
                    <LabelledInput label="Username" placeholder="joe21" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} />
                     
                </div>
                {/* <div className="flex pt-8 justify-between">
                    
                    <LabelledInput label="Address" placeholder="House no..." onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            address: e.target.value
                        })
                    }} />
                    <LabelledInput label="Experience" placeholder="12-years" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            experience: e.target.value
                        })
                    }} />
                   
                </div> */}
                <div className="flex pt-8 justify-between">
                
                 
                    
                    <LabelledInput label="License Id" placeholder="AB - 1234456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            licenseId: e.target.value
                        })
                    }} />
                    <LabelledInput label="Age"  placeholder="35" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            age: e.target.value
                        })
                    }} /> 
                    
                </div>
                <div className="flex pt-8 justify-between">
                    
                {/* <UploadFile/> */}
                    
                   <LabelledInput label="Experience" placeholder="12 years" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            exp: e.target.value
                        })
                    }} /> 
                    

                    
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    
                </div>
                <div className="flex justify-center mt-8">
                <button onClick={sendRequest} type="button" className="mt-8 w-3/12 text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign Up</button>

{/*<button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign Up</button>*/}
                </div>
            </div>
        </div>
    </div>
}



function LabelledInput({ label, placeholder, onChange , type}) {
    return <div className="w-5/12">
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

function UploadFile(){
    return<div className=" w-5/12 h">

        <label className="block mb-2 text-sm text-black font-semibold pt-4 ">Upload Certificate</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-400 block w-full p-1.5" id="file_input" type="file"/>

    </div>
}

