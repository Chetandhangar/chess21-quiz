export type ACTIONTYPES = 
    | {type : "INC_SCORE" ; payload : number}
    | {type : "DEC_SCORE" ; payload : number}
    | {type : "RESET" }
    | {type : "SET_CURRENT_QUIZ" ; payload : object }
    | {type : "RESET_CURRENT_QUIZ"}