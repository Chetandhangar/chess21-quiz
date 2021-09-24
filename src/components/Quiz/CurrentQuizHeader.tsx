import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth:  650,
    backgroundColor: "#bdbdbd",
    marginTop : theme.spacing(1),
    marginBottom : "0.2rem"
  },
  score : {
      marginLeft : "auto",
      fontSize : 8
  }
}));


export type CurrentQuizType = {
    score : number,
    currentQuestion : any,
    totalquestions : number

}



export function CurrentQuizHeader({score , currentQuestion, totalquestions} : CurrentQuizType){
    const classes = useStyles();
    return(
        <List className={classes.root}>
            <ListItem>
            <ListItemText primary={`Question : ${currentQuestion} / ${totalquestions}`}/>
            <ListItemText className={classes.score} primary={`Score : ${score}`}/>
            </ListItem>
        </List>
    )

}