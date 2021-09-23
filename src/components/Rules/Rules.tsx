import React from 'react';
import {useData} from '../../context/data-context';
import {makeStyles} from '@material-ui/core/styles';
import {Card,CardContent,Typography, Container,CssBaseline,Button,CardActions} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      title :{
          fontSize : 14
      },
      rules :{
          padding : theme.spacing(3)
      },
  }));


export const Rules = () =>{
    const {dispatch,state} = useData()
    const {rulesState} = state;
    console.log(rulesState);
    const classes = useStyles();

    return(
        <Container component="main">
            <CssBaseline />
        <div className={classes.paper}>
              <div className={classes.root}>  
              <Card>
              <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Please Check the rules Before Playing the game
              </Typography>
              <Typography className={classes.rules}>
                  {`1 : This question set contains 5 questions.`}
              </Typography>
            <Typography className={classes.rules}>
                {`2 : Each question caries 1 marks.`}
            </Typography>
            <Typography className={classes.rules}>
                {`3 : For Every Wrong Answer 1 mark will be reduce from score.`}
            </Typography>
            <Typography className={classes.rules}>
                {`4 :You cannot revisit the previous questions.`}
            </Typography>
            <CardActions>
            <Button
             onClick={() => dispatch({
                type : "SET_RULES_STATE",
                payload : true
            })}>
                Play Game
            </Button>
            </CardActions>
            
              </CardContent>
              </Card>
            </div>
        </div>
        </Container>
    )
}


