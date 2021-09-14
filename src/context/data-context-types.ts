
import {QuizTypes} from '../data/quiz-types';

export type StateType = {
    quiz : QuizTypes,
    score : number,
    currentQuestion : number;
    username : string
}



export type  QuizContext ={
    state : StateType;
    dispatch : React.Dispatch<any>
} 