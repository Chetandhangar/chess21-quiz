
import {QuizTypes,Quiz} from '../data/quiz-types';

export type CurrentQuizType = Quiz

export type StateType = {
    quiz : QuizTypes,
    score : number,
    currentQuestion : number;
    username : string,
    currentQuiz : CurrentQuizType,
}



export type  QuizContext ={
    state : StateType;
    dispatch : React.Dispatch<any>
} 