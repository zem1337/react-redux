import { useState } from "react"
import { useDispatch } from "react-redux"
import { addhandler } from "../redux/action"


const AddTask=()=>{
    const [textP,setTextP] = useState('')
    const dispatch = useDispatch()
    return(
        <div>
            <input type='text' onChange={(e)=>setTextP(e.target.value)}/>
            <button onClick={()=>dispatch(addhandler({title : textP,isDone:false,id:Math.random()}))}>Add</button>
        </div>
    )
}

export default AddTask