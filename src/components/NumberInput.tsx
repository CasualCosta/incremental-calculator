import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: "Increment" | "StartingValue"
    descWidth: number,
    inputWidth: number,
    gap: number
}
const NumberInput: React.FC<Props> = ({ type, descWidth, inputWidth, gap }) => {
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
        <div className={`flex gap-${gap}`}>
            <div className={`w-${descWidth}`}>
                <p>{description}</p>
            </div>
            <div
                className={`w-${inputWidth}`}
            >
                <input
                    type='number'
                    className={`w-${inputWidth}`}
                    value={value}
                    onChange={(e) => setClampedIncrement(e.target.valueAsNumber)}
                    >
                </input>
            </div>
        </div>
    )
}

export default NumberInput