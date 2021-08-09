export type ACTIONTYPES = 
    | {type : "INC_SCORE" ; payload : number}
    | {type : "DEC_SCORE" ; payload : number}
    | {type : "RESET" }