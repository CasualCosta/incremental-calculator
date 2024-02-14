import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: "Increment" | "StartingValue"
}
const NumberInput: React.FC<Props> = ({type}) => {
    const context = useContext(AppContext)!
    const description = type === "Increment" ? "Increment (%):" : "Starting Value:"
    const value = type === "Increment" ? context.increment : context.startValue
    const action = type === "Increment" ? context.setIncrement : context.setStartValue
    const setClampedIncrement = (value: number) => {
        if(value < 0)
            value = 0
        action(value)
    }
    return (
        <div className='flex'>
            <p>{description}</p>
            <input
                type='number'
                value={value}
                onChange={(e) => setClampedIncrement(e.target.valueAsNumber)}
            >
            </input>
        </div>
    )
}

export default NumberInput