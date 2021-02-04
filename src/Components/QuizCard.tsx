import React from 'react'
import {QuizType} from './../Types/Types';



export const QuizCard: React.FC<QuizType> = ({answer,question,options}) => {

    if(!question){
        <h2>Loading</h2>
    }
    
    console.log(question);
    console.log(options);
    console.log(answer);
    
    return (
        <div className="question-container">
            <div className="question">
                <h3>{question}</h3>
            </div>
            <div className="options">
                <ul>
                {options.map((opt,index)=>{
                    return (<li key={index}>{`${index+1}. ${opt}`}</li>)
                })}

                </ul>
             
            </div>
            <div className="correct-answer">{`Answe: ${answer}`}</div>
            
            
        </div>
    )
}
