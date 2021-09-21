import { createContext , useContext, FC, useReducer} from 'react'
import {quizData} from '../data/data';
import {StateType, QuizContext} from './data-context-types'
import {reducerFunction} from '../reducer/reducer';


const initialState : StateType =  {
    quiz : quizData, 
    score : 0,
    username : "chetan",
    currentQuestion : 0,
    currentQuiz : {
      id : 0,
      quizImage : "",
      quizName : "",
      question : [],
      totalquestions : 0
    }
   
  }

const DataContext = createContext<QuizContext>({
  state : initialState,
  dispatch : () =>{}
});



export const DataProvider : FC  = ({children}) => {
    const[state,dispatch] = useReducer(reducerFunction , initialState)
    console.log(state.currentQuiz,'from state current quiz obj')
     return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export function useData(){
    return useContext(DataContext)
}


