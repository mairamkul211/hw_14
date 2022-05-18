import { useEffect, useState } from 'react'
import './ColorBlock.css'

const ColorBlock = () => {
    const [color, setColor] = useState('red')

    useEffect(() => {
        const time = setInterval(()=> {
            if (color == 'red') {
                setColor('chartreuse')
            }if(color == 'chartreuse'){
                setColor('red')
            }
        }, 1000)
    }, [])
    

    return <div style={{background: color}} className='container'></div>
}

export default ColorBlock