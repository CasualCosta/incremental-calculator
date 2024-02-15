import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: 'WHOLE_NUMBER'
    width: string,
    gap: string
}

const CheckBoxInput: React.FC<Props> = ({type, width, gap}) => {
    const context = useContext(AppContext)!
    const wholeNumber = context.wholeNumber
    const setWholeNumber = context.setWholeNumber
    const description = type === "WHOLE_NUMBER" ? "Whole number:" : ""
    return (
        <div className={`flex w-${width} gap-${gap}`}>
            <p>{description}</p>
            <input
                type='checkbox'
                checked={wholeNumber}
                onChange={(e) => setWholeNumber(e.target.checked)}
            >
            </input>
        </div>
    )
}

export default CheckBoxInput