import {ADDHANDLER,DELETEHANDLER,DONEHANDLER } from "./ActionTypes"
export const addhandler=(payload)=>{
    return(
        {
            type : ADDHANDLER,
            payload
        }
    )
}
export const deletehandler=(payload)=>{
    return(
        {
            type : DELETEHANDLER,
            payload
        }
    )
}
export const donehandler=(payload)=>{
    return(
        {
            type : DONEHANDLER,
            payload
        }
    )
}
