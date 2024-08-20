import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const QAndACard = ({ 
    
    title,
    content,
    createdAt,
    id,
    name
       
}) => {

    const navigate = useNavigate();
    
        


return<div>
    <div className="flex justify-center bg-teal-50 ">

  <Link to={`/q&aReply/${id}`}>
<div class="max-w-4xl pl-5 pr-10 my-4 py-6 bg-teal-400 rounded-lg shadow-md">
        <div class="flex justify-between items-center">
           
            <div className="">
                <a class="flex items-center " href="#">
                    <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
                    <h1 class="text-gray-700 font-bold">{name}</h1>
                </a>
            </div>
            <button onClick={()=>{
                navigate(`/q&aReply/${id}`);
            }}class="px-2 py-1 bg-teal-800 text-white font-bold rounded-xl hover:bg-black" >Reply</button>
        </div>
        <div class="mt-2 pl-6">
            {/* <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href={`/postmod/${id}`}>{title}</a> */}
            <p class="mt-2 text-gray-600">{content}</p>
        </div>
        {/* <div class="flex justify-between items-center mt-4 pl-6">
            <a class="text-teal-900 underline hover:underline" href={`/postmod/${id}`}>Read more</a>
           
        </div> */}
    </div>

    </Link>
    
    </div>
   </div>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({ name, size = "small" }) {
    return <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-6 h-6">
    <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
    </span>
</div>
}