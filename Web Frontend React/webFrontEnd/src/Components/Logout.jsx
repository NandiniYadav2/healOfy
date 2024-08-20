import { Link , useNavigate} from "react-router-dom"


export const Logout = () => {
    const navigate = useNavigate();
    return<div>
        <button onClick={() => {
            navigate("/signin");
        }} type="button" className="mt-8 w-3/12 text-white  bg-teal-600 hover:teal-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-700 dark:border-teal-700">Logout</button>
    </div>
}