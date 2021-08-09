
import {Quiz} from '../data/quiz-types';

export type StateType = {
    quiz : Quiz
    score : number,
    currentQuestion : number;
    username : string
}



export type  QuizContext ={
    state : StateType;
    dispatch : React.Dispatch<any>
} 