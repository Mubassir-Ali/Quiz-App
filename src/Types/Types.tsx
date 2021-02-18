import React from 'react'
export interface Todo {
  title: string;
  text: string;
}

export interface QuestionType{
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}


export interface QuizType{
    question: string;
    answer:string;
    options: string[];

}

export interface QuestionPropsType{
  question:string;
  QNo:number;  
  options:string[];
  callback:(e:React.FormEvent<EventTarget>, userAns:string)=>void
 

}

export interface resultType{
  total:number;
  scores:number;
  callback:(e:React.FormEvent<EventTarget>, restart:number)=>void
}