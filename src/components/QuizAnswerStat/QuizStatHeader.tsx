import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {List , ListItem, ListItemText} from '@material-ui/core'

export type QuizStatType = {
    quizName : string
}


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth:  650,
      backgroundColor: "#bdbdbd",
      marginTop : theme.spacing(1),
      marginBottom : "0.2rem"
    },
    text : {
        textAlign : "center"
    }
  }));

export function QuizStatHeader({quizName} :  QuizStatType){
    const classes = useStyles();
    return(
        <List className={classes.root}>
            <ListItem>
             <ListItemText className={classes.text} primary={quizName}/>
            </ListItem>
        </List>
    )
}