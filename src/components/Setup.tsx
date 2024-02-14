import React, {Dispatch, SetStateAction, useContext} from 'react'
import { AppContext } from '../AppContext'

const Setup = () => {
    const context = useContext(AppContext)!
    const setStartDate = context.setStartDate
    
    return (
        <div>
            <div>
                <p>Start Date:</p>
                <input 
                    type="date" 
                    value={context.startDate.toDateString()} 
                    onChange={(e) => setStartDate(e.target.valueAsDate!)}
                />
            </div>
            {/* <div>
                <p>End Date:</p>
                <input type="date" value={context.displayDate.toDateString()} />
            </div> */}
        </div>
    )
}

export default Setup