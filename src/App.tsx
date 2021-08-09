import { Header} from './components/index'
import './App.css';
import { useData } from './context/data-context';
import {Result} from './components/index'






function App() { 

  const {state, dispatch} = useData()
  return (
    <div className="App">
      <div>
        <div>
       <Header username={state.username} score={state.score}/>
       </div>
      </div>
      <div>
        {state.quiz.quizName}
         <div>
           {state.currentQuestion > 2? (<Result />) 
           : (    <div>
             <div>
         Current Question : {state.currentQuestion + 1}
       </div>
            {state.quiz.question[state.currentQuestion].question}
            {state.quiz.question[state.currentQuestion].options.map((option) =>(
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
