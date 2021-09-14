import React from 'react';
import './App.css';
import { useData } from './context/data-context';
import {Home , CurrentQuiz,Header} from './components/index';
import {Routes,Route} from 'react-router-dom'






function App() { 

  const {state} = useData()
  return (
    <div className="App">
      <div>
        <div>
       <Header username={state.username}/>
       </div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId"  element={<CurrentQuiz/>} />
       </Routes>
      
      </div>
   
    </div>
  );
}

export default App;
