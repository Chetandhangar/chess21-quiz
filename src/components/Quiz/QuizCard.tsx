import React from 'react';
import { Quiz } from '../../data/quiz-types';

export type  QuizCardType = Quiz 

export const QuizCard = (quiz : QuizCardType) => {
    return(
        <div>
            Quiz Card hu
        </div>
    )
}