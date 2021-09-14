export type Options = {
    text : string;
    isRight : boolean
}

export type Question = {
    question : string;
    points : number,
    options : Options[]
}

type Quiz  ={
    id : Number,
    quizImage : string,
    quizName : string,
    question : Question[]
    
}

export  type QuizTypes = Quiz[];