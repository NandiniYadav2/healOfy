import { Link } from "react-router-dom";
export const PostCard = ({ 
    
    title,
    content,
    createdAt,
    id,
    name,
    flag
       
}) => { 

    if(flag === '0'){
        return<div>
        <div className="flex justify-center bg-teal-50 ">
    
    <div class="max-w-4xl pl-5 pr-10 my-4 py-6 bg-teal-400 rounded-lg shadow-md">
            <div class="flex justify-between items-center">
                {/* <span class="font-light text-gray-600">{createdAt}</span> */}
                <div className="">
                    <a class="flex items-center " href="#">
                        <img class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar"/>
                        <h1 class="text-gray-700 font-bold">{name}</h1>
                    </a>
                </div>
                {/* <a class="px-2 py-1 bg-teal-800 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Like</a> */}
            </div>
            <div class="mt-2 pl-6">
                <a class="text-2xl text-gray-700 font-bold hover:text-gray-600" href={`/post/${id}`}>{title}</a>
                <p class="mt-2 text-gray-600">{content}</p>
            </div>
            <div class="flex justify-between items-center mt-4 pl-6">
                <a class="text-blue-600 hover:underline" href="#">Read more</a>
               
            </div>
        </div>
        
        </div>
       </div>
    }


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






{/* 
   <Link to={`/post/${id}`}>
        <div className="p-4 border-b   border-slate-200 pb-4 w-full max-w-screen-md cursor-pointer bg-teal-400 mt-1">
            <div className="flex">
                <Avatar name={"Aparna"} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{id}</div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {createdAt}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
              {console.log("ja kya nahi")}
            <div className="text-md font-thin">
                {content.slice(0, 200) + "..."}
            </div>
            <div className="flex justify-between text-center mt-4"> 
              
              
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                 </svg>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
               </svg>

              

            </div>
            
        </div>
    </Link>
    */} 
  