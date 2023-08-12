import { useState } from "react"

const Yeah = (props) => {
    const [color,setColor] = useState('')
    const [active,setActive] = useState(false)
    const [type,setType] = useState(false)
    const handleClick = () => {
        if(color === ''){
            setActive(e => !e);
            setColor('green')
            // if(className === 'bg-salmon'){

            // }
            // setType(e => !e)
        }
        else {
            setColor('')
        }
    }
    return (
            <li onClick={handleClick} className={active?'bg-salmon':''} style={{backgroundColor: type ?'red':'black' ,border: "solid",borderColor: "red"}}>Keke</li>
    )
}
export default Yeah;