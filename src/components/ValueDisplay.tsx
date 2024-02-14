import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    date: Date,
    offset: number
}

const ValueDisplay: React.FC<Props> = ({date, offset}) => {
    const context = useContext(AppContext)!
    const increment = context.increment
    const startDate = context.startDate
    const offsetDate = new Date(date)
    offsetDate.setDate(date.getDate() + offset)
    const startValue = context.startValue
    const interval = calculateInterval()
    const value = startValue * (1 + (increment/100)) ** (interval)
    function calculateInterval (): number {
        const timeDiff = date.getTime() - startDate.getTime()
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24) + offset); 
        return dayDiff
    }
    if(interval < 0)
        return <div className={offset === 0 ? "" : "scale-50"}>Invalid date</div>
    return (
        <div className={offset === 0 ? "" : "scale-50"}>
            <p>{offsetDate.toDateString()}</p>
            <p>Day: {interval}</p>
            <p>{value.toFixed(3)}</p>
        </div>
    )
}

export default ValueDisplay