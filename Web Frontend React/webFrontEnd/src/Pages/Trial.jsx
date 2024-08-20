import { useNavigate } from "react-router-dom";
import { TrialCompo } from "../Components/TrialCompo";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Trial = ()=>{
    const {id}  = useParams();
    
    return(
        <div><TrialCompo id={id}/></div>
    )
}