import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { FaRegCircleXmark } from 'react-icons/fa6'

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
    const wholeNumber = context.wholeNumber
    const WIDTH = 'w-64'
    const BACKGROUND_COLOR = 'bg-slate-700/10'
    const ROUNDED = 'rounded-2xl'
    const DIV_STYLE = `${WIDTH} ${BACKGROUND_COLOR} ${ROUNDED}`
    function calculateInterval (): number {
        const timeDiff = date.getTime() - startDate.getTime()
        const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24) + offset); 
        return dayDiff
    }
    if(interval < 0)
        return <div className={`${offset === 0 ? "" : "scale-50"} flex flex-col items-center py-8 text-red-500 ${DIV_STYLE}`}>
            <p className='text-red-300'>{offsetDate.toDateString()}</p>
            <FaRegCircleXmark size={128} />
            <p className='text-red-300'>Invalid date</p>
        </div>
    return (
        <div className={`${offset === 0 ? "" : "scale-50"} py-8 ${DIV_STYLE}`}>
            <p>{offsetDate.toDateString()}</p>
            <p className='text-4xl'>Day {interval + 1}</p>
            <p className='text-8xl mb-8'>{wholeNumber ? Math.floor(value) : value.toFixed(3)}</p>
        </div>
    )
}

export default ValueDisplay