import React, {} from 'react';
import {useData} from  '../../context/data-context';
import './Home.css';

import {Link} from 'react-router-dom'

export const Home = () => {
    const {state} = useData();
    return(
        <div className="quiz">
          {state.quiz.map((quiz) => (
            <div  className="category-card">
            <Link to={`/quiz/${quiz.id}`}>
            {quiz.quizName}
            <img className="quiz-card-image" src={quiz.quizImage} alt="Quiz"/>
            </Link>  
            </div>
          ))}
        </div>
    )
}

