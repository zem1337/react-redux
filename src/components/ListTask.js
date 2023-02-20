import { useState } from "react"
import { useSelector } from "react-redux"
import CardTask from "./CardTask"

const ListTask=()=>{
    const tasks = useSelector(state=> state.tasks)
    const [cond,setCond] = useState('all')
    return(
        <div>
            <button onClick={()=>setCond('all')}>All</button>
            <button onClick={()=>setCond('done')}>Done</button>
            <button onClick={()=>setCond('notdone')}>Not Done</button>
            {
                cond == 'all' ?
                tasks.map(el=> <CardTask el={el}/>)
                : cond == 'done' ?
                tasks.filter(el=>el.isDone ==true).map(el=> <CardTask el={el}/>)
                :
                tasks.filter(el=>el.isDone ==false).map(el=> <CardTask el={el}/>)
            }
        </div>
    )
}

export default ListTask