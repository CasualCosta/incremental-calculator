import React, { useContext, useRef } from 'react'
import { AppContext } from '../AppContext'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

type Props = {
    direction: "Left" | "Right"
}

const ArrowButton: React.FC<Props> = ({direction}) => {
    const refLeft = useRef<HTMLButtonElement>(null)
    const refRight = useRef<HTMLButtonElement>(null)
    const context = useContext(AppContext)!
    const displayDate = context.displayDate
    const setDisplayDate = context.setDisplayDate
    const offset = direction === "Left" ? -1 : 1
    const offsetDate = new Date(displayDate)
    offsetDate.setDate(displayDate.getDate() + offset)


    return (
        <button
            onClick={() => setDisplayDate(offsetDate)}
            ref={direction === "Left" ? refLeft : refRight}
        >
            {direction === "Left" ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
    )
}

export default ArrowButton