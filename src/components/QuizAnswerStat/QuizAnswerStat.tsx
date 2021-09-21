import React from 'react';
import {useData} from '../../context/data-context';

export const QuizAnswerStat = () => {
    const {state} = useData();
    const {currentQuiz} = state;
    return(
       <div>
        {currentQuiz?.quizName}
        <div>
            {currentQuiz?.question?.map((question) =>(
                <div>
                    <h1>{question?.question}</h1>
                    <p>{question?.options.map((option) =>(
                        <p style={option?.isRight ? {backgroundColor : "green"} : {backgroundColor : ""}}>{option.text}</p>
                    ))}</p>
                </div>
            ))}
        </div>
       </div>
    )
}