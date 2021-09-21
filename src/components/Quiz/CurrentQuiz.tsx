import React from 'react';
import {useData} from '../../context/data-context';
import {Result} from '../Result/Result';
import './Quiz.css';
import {Card,CardBody,CardText} from 'reactstrap'

export const CurrentQuiz = () => {
    const {dispatch,state} = useData()
    const {currentQuiz} = state;
    console.log(state?.currentQuestion, 'from quiz component currentquestion')
    console.log(currentQuiz, 'from current quiz component')
    return(
        <div className="quiz-details-container">
        <div className="quiz-card">
          {state?.currentQuestion > currentQuiz?.totalquestions ? (
              <Result />
          ): (
              <div className="container">
                <Card>
                    <CardBody>
                        {`Score : ${state?.score}`}
                        <CardText>{currentQuiz?.question?.[state?.currentQuestion - 1 ]?.question}</CardText>
                        {currentQuiz?.question?.[state?.currentQuestion-1]?.options?.map((option) => (
                            <CardText
                            style={{cursor : "pointer"}}
                             onClick={() => {option?.isRight ? dispatch({type : "INC_SCORE", payload : 1}) 
                             : dispatch({type : "DEC_SCORE" , payload : 1}) }}
                            >{option?.text}</CardText>
                        ))}
                    </CardBody>
                </Card>
              </div>
          )}
        </div>
      
        </div>
    )
}
