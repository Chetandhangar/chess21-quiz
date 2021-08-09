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
        default :
        return{
          ...state
        }
    }
  }

  export {reducerFunction}
