import React from 'react'
import {QuizType} from './../Types/Types';


export const QuizCard = (props:QuizType[]) => {

    if(!props.length){
        <h2>Loding</h2>
    }else{
        console.log(props.answer)

    }


    
    
    return (
        <div>
            <h1>Hello from quiz card</h1>
            
        </div>
    )
}
