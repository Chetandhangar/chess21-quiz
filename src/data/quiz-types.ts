export type Options = {
    text : string;
    isRight : boolean
}

export type Question = {
    question : string;
    points : number,
    options : Options[]
}

export type Quiz  ={
    quizName : string,
    question : Question[]
    
}