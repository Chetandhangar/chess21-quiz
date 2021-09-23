import {StateType} from '../context/data-context-types';
import {ACTIONTYPES} from './reducer-types'

function reducerFunction(state : StateType, action :ACTIONTYPES){
    switch(action.type){
      case "INC_SCORE":
        return {...state, 
          score : state.score + action.payload,
          currentQuestion : state.currentQuestion + 1
        }
        case "DEC_SCORE":
          return {...state, 
            score : state.score - action.payload,
            currentQuestion : state.currentQuestion + 1
          }
        case "RESET":
          return{
            ...state,
            score : 0,
            currentQuestion : 1
          }
        case "SET_CURRENT_QUIZ":
          console.log("current quiz set called")
          return{
            ...state,
            score : 0,
            currentQuiz : {...state.currentQuiz, ...action.payload},
            currentQuestion : state.currentQuestion = 1
          }
          case "RESET_CURRENT_QUIZ" :
            return{
              ...state,
              rulesState : state.rulesState =  false,
              score : state.score = 0,
              currentQuiz : {...state.currentQuiz, 
                id : 0,
                quizImage : "",
                quizName : "",
                question : [],
                totalquestions : 0 },
                currentQuestion : state.currentQuestion = 1
            }
          case "SET_RULES_STATE" : 
          return{
            ...state ,
            rulesState : state.rulesState = action.payload
          }
        default :
        return{
          ...state
        }
    }
  }
  

  export {reducerFunction}
