import React from 'react'
import {useData} from '../../context/data-context';
import {Button} from 'reactstrap';
import {useNavigate} from 'react-router-dom';

export const  Result = () =>{
    const {state,dispatch} = useData();
    const navigate = useNavigate();
    function resetHandler(){
        dispatch({type : "RESET"});
        navigate('/')
    }
    return(
        <div>
            Your Overall Score is {state.score}
            <Button onClick={() => resetHandler()}>Replay</Button>
        </div>
    )
} 