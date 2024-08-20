import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL2 } from "../config";

export const Login = () => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState({
        usernameOrEmail: "",
        password: ""
    });

    // const [user , setUser] = useState({});
    // const [doctorId, setDoctorId] = useState();

    // function sendRequest(){
    //     navigate("/doctordashboard");
    // }

    // async function fetchDoctor(){
    //     try{


    //         console.log("hiii2");

    //         const response = await axios.get(`${BACKEND_URL2}/api/admins/doctor/${postInputs.usernameOrEmail}`);
    //         console.log(response);

    //         console.log(`third: ${response.data,id}`);
    //         setDoctor(response.data);

    //         console.log(`last: ${doctor.id}`);

    //         if(doctor){
    //             navigate(`/doctordashboard/${doctor.id}`);
    //         }
            

    //     }catch(e){
    //         alert("something went wrong3");
    //     }
        
    // }

    // async function fetchUserId(){

    //     console.log("ph8cha ki nhi");


    //     try {
    //         const response = await axios.get(`${BACKEND_URL2}/api/user/${postInputs.usernameOrEmail}`);
            
    //         console.log(`first: ${response.data.id}`);
    //         setUser(response.data);

           
    //         if(user.role === "ADMIN"){
    //             navigate("/admindashboard");
    //         }
    //         else if(user.role === "DOCTOR"){

    //             console.log("hiii");
    //             if(user){
    //                 console.log(`second: ${user.id}`)
    //             }
    //             fetchDoctor();
               
    //         }
  
    //     } catch(e) {
    //         alert("Error while signing up2")
    //         // alert the user here that the request failed
    //     }

    // }
   
    // async function sendRequest() {
       
    //     try {
    //         const response = await axios.post(`${BACKEND_URL2}/api/auth/doctor/login`, postInputs);
    //         const jwt = response.data;
            
    //         localStorage.setItem("token", jwt.accessToken);

    //         console.log(`first1: ${response.data}`);

           
           
    //         // fetchUserId();
 
            
    //     } catch(e) {
    //         alert("Error while signing up1")
    //         // alert the user here that the request failed
    //     }

    //     try {

    //         const response = await axios.get(`${BACKEND_URL2}/api/user/${postInputs.usernameOrEmail}`);
    //         console.log("ph8cha ki nhi");
            
    //         console.log(`first2: ${response.data.Id}`);
    //         setUser(response.data);

    //         console.log(`first3: ${user.firstName}`);

           
    //         if(user.role === "ADMIN"){
    //             navigate("/admindashboard");
    //         }
    //         // else if(user.role === "DOCTOR"){

    //         //     console.log("hiii");
    //         //     if(user){
    //         //         console.log(`second: ${user.id}`)
    //         //     }
    //         //     fetchDoctor();
               
    //         // }
  
    //     } catch(e) {
    //         alert("Error while signing up2")
    //         // alert the user here that the request failed
    //     }


    //     if(user !== undefined && user.role === "DOCTOR"){
    //         try{

    //             console.log("hiii233333");
    
    //             const response = await axios.get(`${BACKEND_URL2}/api/admins/doctor/${postInputs.usernameOrEmail}`);
    //             console.log(response);
    //             let doctorID = response.data.id;
    
    //             console.log(`third1: ${response.data.id}`);
                
    //             setDoctorId(doctorID);

    //             console.log(`third3: ${response.data.firstName}`);

    
    //             console.log(`last: ${doctorId}`);
    
    //         }catch(e){
    //             alert("something went wrong3");
    //         }
            
    //     }

    //     if(user.role === "DOCTOR" && doctorId !== undefined){
    //         navigate(`/doctordashboard/${doctorId}`);
    //     }


    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL2}/api/auth/doctor/login`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt.accessToken);
            
            const userResponse = await axios.get(`${BACKEND_URL2}/api/user/${postInputs.usernameOrEmail}`);
            const user = userResponse.data;
    
            if (user.role === "ADMIN") {
                navigate("/admindashboard");
            } else if (user.role === "DOCTOR") {
                const doctorResponse = await axios.get(`${BACKEND_URL2}/api/admins/doctor/${postInputs.usernameOrEmail}`);
                const doctorId = doctorResponse.data.id;
                if(doctorResponse.data.moderator == 0){
                    navigate(`/doctordashboard/${user.id}/${doctorId}`);
                }
                else if(doctorResponse.data.moderator == 1){
                    navigate(`/role/${user.id}/${doctorId}`);
                }
                
            }
        } catch (error) {
            console.error("Error while signing in:", error);
            alert("Error while signing in");
        }
    
    
    }

    
    

    return <div className="h-screen flex justify-center flex-col bg-teal-50">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold text-center text-teal-600">
                        Sign In
                    </div>
                    <div className="text-slate-500">
                        Don't have an account?
                        <Link className="pl-2 underline text-teal-400" to={"/signup"}>
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="pt-8">
                    
                    <LabelledInput label="Email" placeholder="abc@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            usernameOrEmail: e.target.value
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />
                    {/* <button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign in</button> */}

                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Sign in</button>
                </div>
            </div>
        </div>
    </div>
}



function LabelledInput({ label, placeholder, onChange , type}) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-400 focus:border-teal-400 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}
