import React, { useContext } from 'react'
import { AppContext } from '../AppContext'

type Props = {
    type: 'WHOLE_NUMBER'
    descWidth: number,
    inputWidth: number
    gap: number
}

const CheckBoxInput: React.FC<Props> = ({type, descWidth, inputWidth, gap}) => {
    const context = useContext(AppContext)!
    const wholeNumber = context.wholeNumber
    const setWholeNumber = context.setWholeNumber
    const description = type === "WHOLE_NUMBER" ? "Whole number:" : ""
    return (
        <div className={`flex gap-${gap}`}>
            <div className={`w-${descWidth}`}>
                <p>{description}</p>
            </div>
            <div className={`w-${inputWidth/2}`}>
                <input
                    type='checkbox'
                    className={`w-32`}
                    checked={wholeNumber}
                    onChange={(e) => setWholeNumber(e.target.checked)}
                >
                </input>
            </div>
        </div>
    )
}

export default CheckBoxInput