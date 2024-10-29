import { useState } from "react"
import arrow from "../assets/dropbox-arrow.png"

function DropBox({title , content}){
    const [Open , Setopen] = useState(false)
    const toogle = ()=>{
        Setopen(!Open)
    } 
    return(
        <div className="dropbox">
            <div className="dropdown" onClick={toogle}><h3 className="dropdown-title">{title}</h3><img src={arrow} className={Open === true ? "active" : undefined} /></div>
            {typeof content === "string" ? (
            <p className={`p ${Open === true ? "actives" : ""}`}>{content}</p>
            ) : (<div className={`p ${Open === true ? "actives" : ""}`}>{content}</div>)}
        </div>
    )
}

export default DropBox