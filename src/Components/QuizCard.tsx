import React, { useState } from 'react'
import { QuestionPropsType } from './../Types/Types';

export const QuizCard: React.FC<QuestionPropsType> = ({ question, options, callback }) => {
    const [selectedAns, setSelectedAns] = useState("")
    const handleSelection = (e: any) => {
        setSelectedAns(e.target.value)
    }

    return (
        <div className="question-container">
            <div className="question">
                <h3>{question}</h3>
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}>
                <div className="options">
                    {options.map((opt, index) => {
                        return (<div key={index}>
                            <label className="radio">
                                <input type="radio" name="opt" value={opt} checked={selectedAns === opt} onChange={handleSelection} required />
                                {` ${opt}`}
                            </label>
                        </div>
                        )
                    })}
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}
