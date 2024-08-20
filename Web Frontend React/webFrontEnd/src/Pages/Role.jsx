import { useNavigate, useParams } from "react-router-dom";
export const Role = () => {
    const navigate = useNavigate();

    const {userId , doctorId}  = useParams();

    return(
       
        <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="flex flex-col bg-teal-500 rounded-3xl border border-grey-800 box-shadow:2xl w-1/4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className='m-4'>
                   <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Choose Role:</button>
                </div>
                <div className='flex flex-row justify-between m-4 '>
                    <div>
                       <button type="button" onClick={() => {

                           navigate(`/doctordashboard/${userId}/${doctorId}`);

                       }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Doctor</button>
                    </div>

                    

                    <div>
                    <button type="button" onClick={() => {

                           navigate(`/moderatordashboard`);

                       }} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Moderator</button>
                    </div>
                 </div>
                    
                </div>
               
            </div>
        </div>
        
   
    )
}