import React, {} from 'react';
import {useData} from  '../../context/data-context';
import {Link} from 'react-router-dom'

export const Home = () => {
    const {state} = useData();
    return(
        <div>
          {state.quiz.map((quiz) => (
            <div>
            <Link to={`/quiz/${quiz.id}`}>
            {quiz.quizName}
            <img src={quiz.quizImage} alt="Quiz Image"/>
            </Link>  
            </div>
          ))}
        </div>
    )
}

