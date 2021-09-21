import React from 'react'
import {useData} from '../../context/data-context';
import {Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';


export const  Result = () =>{
    const {state,dispatch} = useData();
    const navigate = useNavigate();
    function resetHandler(){
        dispatch({type : "RESET"});
        navigate('/')
    }
    return(
        <div className="container">
           <p>Hi {state.username}  Your Overall Score is {state.score}</p> 
            <Button style={{marginTop : "3rem", marginLeft : "3rem"}} onClick={() => resetHandler()}>Replay</Button>
            <div></div>
            <div style={{marginTop : "3rem", marginLeft : "3rem"}}>
                <Button>
                    <Link style={{marginTop : "3rem" , padding : "3rem"}} to='/quiz/stat'>
                        See Answers
                    </Link>
                </Button>
            </div>
        </div>
    )
} 