
type HeaderTypes = {
   username : string;
   score : number
}

function Header({username,score} : HeaderTypes){
    return(
        <div>
         <div>
            <h1>Chess Quiz Master</h1>
            <div>Welcome , {username}</div>
            <div>Score : {score}</div>
         </div>
        </div>
    )
}

export {Header}