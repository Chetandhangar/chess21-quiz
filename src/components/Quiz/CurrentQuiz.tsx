import React from 'react';
import {useData} from '../../context/data-context';
import {Result} from '../Result/Result';
import {Card,CardContent,Typography, Container,
    CssBaseline, Divider} from '@material-ui/core' 
import './Quiz.css';
import {Rules} from '../index';
import useStyles from './QuizStyles';
import {CurrentQuizHeader} from './CurrentQuizHeader'


export const CurrentQuiz = () => {
    const {dispatch,state} = useData()
    const {currentQuiz} = state;
    const {rulesState} = state ;
    const classes = useStyles();
    console.log(state?.currentQuestion, 'from quiz component currentquestion')
    console.log(currentQuiz, 'from current quiz component')
    return(
        <div className="quiz-details-container">
        <div className="quiz-card">
            {rulesState === false ?  (<Rules />) : 
            
            (
                <>
                {state?.currentQuestion > currentQuiz?.totalquestions ? (
                    <Result />
                ): (
                    <Container component="main">
                        <CssBaseline />
                        <div className={classes.paper}>
                            <div className={classes.root}>
                                <CurrentQuizHeader totalquestions={state?.currentQuiz?.totalquestions}
                                 score={state?.score}
                                 currentQuestion={state?.currentQuestion} />
                                <Card className={classes.questionCard}>
                                    <CardContent>
                                        <Typography variant="h1" className={classes.title}  gutterBottom>
                                            {currentQuiz?.question?.[state?.currentQuestion - 1 ]?.question}
                                        </Typography>
                                        <Divider component="li" />
                                        <Typography>
                                            {currentQuiz?.question?.[state?.currentQuestion-1]?.options?.map((option) =>(
                                                <Typography
                                                className={classes.option}
                                                onClick={() => {option?.isRight ? dispatch({type : "INC_SCORE", payload : 1}) 
                                                : dispatch({type : "DEC_SCORE" , payload : 1}) }}
                                                >
                                                    {option?.text}
                                                </Typography>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </Container>
                )}
                </>
            )
            }
         
        </div>
      
        </div>
    )
}
/*
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

*/