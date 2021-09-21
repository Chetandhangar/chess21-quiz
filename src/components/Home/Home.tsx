import React, {useEffect} from 'react';
import {useData} from  '../../context/data-context';
import './Home.css';
import {Container,Card,Grid,CardMedia,CardContent,Typography,Button,CardActions} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    media : {
      height : 300,
    },
    productContainer : {
      marginTop : "3rem"
    },
    cardDismissBtn : {
      position : "absolute",
      top: "0rem",
      right: "0.5rem",
  },
  productDetailContainer : {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  }));


export const Home = () => {
    const {state,dispatch} = useData();
    const {quiz} = state;
    const classes = useStyles();

    useEffect(() => {
      console.log("useEffect from home to reset the quiz called")
      dispatch({type : "RESET_CURRENT_QUIZ"})
    },[dispatch])

    return(
         <Container className={classes.productContainer}>
            <Grid container spacing={3}>
              {quiz?.map((quiz) =>(
                 <Grid item  xs={12} sm={6} md={4}>
                   <Card>
                   <CardMedia 
                            className={classes.media}
                            image={quiz?.quizImage}
                            title="quz"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                                    {quiz?.quizName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                                {`Total Questions ${quiz?.totalquestions}`}                              
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button 
                    onClick={() => dispatch({type : "SET_CURRENT_QUIZ", payload : quiz})}
                    size="small" color="primary">
                      <Link  to={`/quiz/${quiz.id}`}>
                      Play Quiz
                      </Link>
                    </Button>
                    </CardActions>
                   </Card>
                 </Grid>
              ))}
            </Grid>

         </Container>
    )
}

