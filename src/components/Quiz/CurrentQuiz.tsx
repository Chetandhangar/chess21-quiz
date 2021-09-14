import React from 'react';
import {useParams} from 'react-router-dom'
import {quizData} from '../../data/data';
import {useData} from '../../context/data-context';
import {Result} from '../Result/Result';

export const CurrentQuiz = () => {
    const {dispatch,state} = useData()
    const {quizId} = useParams();
    const currentQuiz = quizData.find((quiz) => quiz.id === parseInt(quizId));
    return(
        <div>
        {currentQuiz?.quizName}
        <div>
        {state.currentQuestion > 2? (<Result />)
        : (    <div>
            <div>
        Current Question : {state.currentQuestion + 1} :
        Current Score = {state.score}
        </div>
        {currentQuiz?.question[state.currentQuestion].question}
        {currentQuiz?.question[state.currentQuestion].options.map((option) =>(
            <div>
            <button onClick={() => dispatch({
            type : option.isRight ? "INC_SCORE" : "DEC_SCORE", payload  : 1
            })}>{option.text}</button>
            </div>
        ))}
        </div>)}
        </div>
        </div>
    )
}
