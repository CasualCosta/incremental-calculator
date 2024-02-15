import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: "Increment" | "StartingValue"
    width: string,
    gap: string
}
const NumberInput: React.FC<Props> = ({ type, width, gap }) => {
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
        <div className={`flex justify-center gap-${gap}`}>
            <p className={`w-${width}`}>{description}</p>
            <input
                type='number'
                className={`w-32`}
                value={value}
                onChange={(e) => setClampedIncrement(e.target.valueAsNumber)}
            >
            </input>
        </div>
    )
}

export default NumberInput