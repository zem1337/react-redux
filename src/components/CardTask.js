import { useDispatch } from "react-redux"
import { deletehandler, donehandler } from "../redux/action"


const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h3>{el.title}</h3>
            <h4>{el.isDone ? "TRUE" : "FALSE"}</h4>
            <button onClick={()=>dispatch(donehandler(el.id))}>Done</button>
            <button onClick={()=>dispatch(deletehandler(el.id))}>Delete</button>
        </div>
    )
}

export default CardTask