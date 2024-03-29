import { Dispatch, SetStateAction } from "react"
export type Parameters = {
    startDate: Date,
    displayDate: Date,
    startValue: number
    increment: number,
    previousGap: number,
    nextGap: number,
    wholeNumber: boolean,
    setStartDate: Dispatch<SetStateAction<Date>>,
    setDisplayDate: Dispatch<SetStateAction<Date>>,
    setStartValue: Dispatch<SetStateAction<number>>,
    setIncrement: Dispatch<SetStateAction<number>>,
    setPreviousGap: Dispatch<SetStateAction<number>>,
    setNextGap: Dispatch<SetStateAction<number>>,
    setWholeNumber: Dispatch<SetStateAction<boolean>>
} | undefined