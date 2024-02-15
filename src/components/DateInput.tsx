import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: "Start" | "Display"
    gap: string
    width: string
}
const DateInput: React.FC<Props> = ({type, gap, width }) => {
    const context = useContext(AppContext)!
    const description = type === "Start" ? "Start Date:" : "Display Date:"
    const state = type === "Start" ? context.startDate : context.displayDate
    const action = type === "Start" ? context.setStartDate : context.setDisplayDate
    return (
        <div className={`flex gap-${gap} w-${width}`}>
            <p>{description}</p>
            <input 
                type="date" 
                className={`w-32`}
                value={state.toISOString().split("T")[0]}
                onChange={(e) => action(e.target.valueAsDate!)}
            />
        </div>
    )
}

export default DateInput