import { useState } from "react";

export const Input = () => {
    const [color,setColor] = useState('')
    const ValueInput = (e) => {
        let color = e.target.value
        if(color){
            setColor(color)
        }
    }

    return (
        <>
        <div style={{backgroundColor : color}}>
            Hehe
        </div>
        <input type="color"onChange={ValueInput}/>
        </>
    )
}

