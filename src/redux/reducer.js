import { ADDHANDLER,DONEHANDLER,DELETEHANDLER } from "./ActionTypes";
const intialstate={
    tasks : [
        {title : "wake up",isDone:false,id : Math.random()},
        {title : "go to GMC",isDone:false,id : Math.random()},
        {title : "go home",isDone:false,id : Math.random()}
    ]
}
const Reducer=(state=intialstate,action)=>{
    switch (action.type){
        case ADDHANDLER :return {...state,tasks : state.tasks.map(el=> el.id == action.payload ? {...el,isDone : !el.isDone} : el)}
        case DONEHANDLER : return  {...state,tasks : [...state.tasks,action.payload]}
        case DELETEHANDLER : return {...state,tasks : state.tasks.filter(el=>el.id != action.payload)}
        default : return state
    }
}
export default Reducer