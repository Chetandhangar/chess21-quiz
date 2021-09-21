import React from 'react';
import {useData} from '../../context/data-context';

export const QuizAnswerStat = () => {
    const {state} = useData();
    const {currentQuiz} = state;
    return(
       <div>
          Current Quiz stat
       </div>
    )
}