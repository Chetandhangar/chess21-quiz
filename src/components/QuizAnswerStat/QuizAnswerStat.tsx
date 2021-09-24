import React from 'react';
import {useData} from '../../context/data-context';
import useStyles from './StatStyles';
import {Container,CssBaseline,Card,CardContent, Typography, Divider,
Grid} from '@material-ui/core';
import {QuizStatHeader} from './QuizStatHeader'

export const QuizAnswerStat = () => {
    const {state} = useData();
    const {currentQuiz} = state;
    const classes = useStyles();
    return(
       <Container>
           <CssBaseline />
           <div className={classes.paper}>
            <div className={classes.root}>
                <QuizStatHeader quizName = {currentQuiz?.quizName}/>
                {currentQuiz?.question?.map((question) =>(
                   <Grid item  xs={12} spacing={1}
                   style={{marginTop : "2rem", marginBottom:"1rem"}}>
                       <Card className={classes.card}>
                           <CardContent>
                               <Typography className={classes.title}>
                                   {question?.question}
                               </Typography>
                               <Divider component="li"/>
                               <Typography>
                                   {question?.options.map((option) =>(
                                       <>
                                       <Typography className={classes.option}
                                       style={option?.isRight ? {backgroundColor : "green"} : {  backgroundColor : "#e0e0e0"}}>
                                           {option?.text}
                                       </Typography>
                                       </>
                                   ))}
                               </Typography>
                           </CardContent>
                       </Card>
                  </Grid>
                ))}
            </div>
           </div>
       </Container>
    )
}