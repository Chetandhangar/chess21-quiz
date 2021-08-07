import {Header} from './components/Header'
import './App.css';
import { useReducer} from 'react';
import {quizOne} from './data/data';
//import { Question, Options, Quiz} from './data/quiz-types';



export function Result(){
  return(
    <div>
      Result
      <button>Replay the Quiz</button>
    </div>
    )
}

function App() { 
  type ACTIONTYPES = 
    | {type : "INC_SCORE" ; payload : number}
    | {type : "DEC_SCORE" ; payload : number}
    | {type : "RESET" }

  const initialState = {
    score : 0,
    username : "chetan",
    currentQuestion : 0
  }
  function reducerFunction(state : typeof initialState, action :ACTIONTYPES){
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
  const [state , dispatch] = useReducer(reducerFunction , initialState)

  return (
    <div className="App">
      <div>
        <header>Chess21- Quiz</header>
      </div>
      <div>
        <div>
       <Header username={state.username} score={state.score}/>
       </div>
      </div>
      <hr />
      <br/>
      <div>
        {quizOne.quizName}
         <div>
           {state.currentQuestion > 2? (<Result />) 
           : (    <div>
             <div>
         Current Question : {state.currentQuestion + 1}
       </div>
            {quizOne.question[state.currentQuestion].question}
            {quizOne.question[state.currentQuestion].options.map((option) =>(
              <div>
                <button onClick={() => dispatch({
                type : option.isRight ? "INC_SCORE" : "DEC_SCORE", payload  : 1
             })}>{option.text}</button>
              </div>
            ))}
          </div>)}
       
         </div>
     
        
      </div>
    </div>
  );
}

export default App;
