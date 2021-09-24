import React from 'react'
import {useData} from '../../context/data-context';
import {Link, useNavigate} from 'react-router-dom';
import {Container , CssBaseline, Card , CardContent, Typography,Button} from "@material-ui/core"
import useStyles from './ResultStyles'

export const  Result = () =>{
    const {state,dispatch} = useData();
    const navigate = useNavigate();
    function resetHandler(){
        dispatch({type : "RESET"});
        navigate('/')
    }
    const classes = useStyles();
    return(
      <Container component="main">
          <CssBaseline />
          <div className ={classes.paper}>
            <div className={classes.root}>
                <Card className={classes.Card}>
                    <CardContent>
                        <Typography>
                            {state?.score > 3 ? (
                                <><Typography className={classes.title}>
                                    {"Bravo ! Well Played"}
                                   </Typography></>
                            ):
                            (
                                <><Typography className={classes.title}>
                                    {`You need to Improve`}
                                </Typography>
                                </>
                            )
                            }
                        </Typography>
                        <Typography className={classes.title}>
                            {`Your Score is  ${state.score}` }                            
                        </Typography>
                   </CardContent>
                   <div style={{textAlign : "center", marginBottom : "1rem"}}>

                       <Button 
                       onClick={() => resetHandler()}>
                           Play Quiz
                       </Button>
                        <Button>
                        <Link
                        className="text-dark"
                         to="/quiz/stat">See Answers</Link>
                        </Button>
                    </div>    
                </Card>
            </div>
          </div>
      </Container>
    )
} 