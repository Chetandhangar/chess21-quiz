import {Question, Options} from '../data/quiz-types';
import {quizOne} from '../data/data';

 function calculateScore(currentScore : number, question : Question, option : Options) : number{
   return option.isRight  ? currentScore += question.points : currentScore + 0
}

console.log(calculateScore(0, quizOne.question[0] , quizOne.question[0].options[1]))

export {calculateScore}