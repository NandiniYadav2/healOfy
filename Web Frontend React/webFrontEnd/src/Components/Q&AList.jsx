import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { QAndACard } from "./Q&ACard";

 export const QAndAList = () => {
    const [allQuestions, setAllQuestions] = useState([]);

    async function postyy(){
        
        const response = await axios.get(`${BACKEND_URL}/api/posts/allPosts`);
        
        setAllQuestions(response.data.content);
        
    }

    useEffect(() => {
        
        postyy();
        
    },[]);
    console.log(allQuestions);

    return(
        <div className="mt-10">

        {allQuestions.map((oneQuestion,index)=>{
            
               return(
                <div>
                   
                    
                    <QAndACard  title={oneQuestion.title} content={oneQuestion.content} createdAt={oneQuestion.createdAt} id={oneQuestion.id} name={oneQuestion.name}/>
                   
                   

                </div>
               ) 

           
        })}

        </div>
    )


 }