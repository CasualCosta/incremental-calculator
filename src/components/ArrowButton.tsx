import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

type Props = {
    direction: "Left" | "Right"
}

const ArrowButton: React.FC<Props> = ({direction}) => {
    const context = useContext(AppContext)!
    const displayDate = context.displayDate
    const setDisplayDate = context.setDisplayDate
    const offset = direction === "Left" ? -1 : 1
    const offsetDate = new Date(displayDate)
    offsetDate.setDate(displayDate.getDate() + offset)
    
    return (
        <button
            onClick={() => setDisplayDate(offsetDate)}
        >
            {direction === "Left" ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
    )
}

export default ArrowButton