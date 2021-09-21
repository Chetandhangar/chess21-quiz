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
    id : Number,
    quizImage : string,
    quizName : string,
    question : Question[],
    totalquestions : number
    
}

export  type QuizTypes = Quiz[];