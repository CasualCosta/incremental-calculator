import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: "Start" | "Display"
    gap: number
    descWidth: number
    inputWidth: number
}
const DateInput: React.FC<Props> = ({type, gap, descWidth, inputWidth }) => {
    const context = useContext(AppContext)!
    const description = type === "Start" ? "Start Date:" : "Display Date:"
    const state = type === "Start" ? context.startDate : context.displayDate
    const action = type === "Start" ? context.setStartDate : context.setDisplayDate
    return (
        <div className={`flex gap-${gap}`}>
            <div className={`w-${descWidth}`}>
                <p>{description}</p>
            </div>
            <input 
                type="date" 
                className={`w-${inputWidth}`}
                value={state.toISOString().split("T")[0]}
                onChange={(e) => action(e.target.valueAsDate!)}
            />
        </div>
    )
}

export default DateInput