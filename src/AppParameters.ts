import { Dispatch, SetStateAction } from "react"
export type Parameters = {
    startDate: Date,
    displayDate: Date,
    increment: number,
    previousGap: number,
    nextGap: number
    setStartDate: Dispatch<SetStateAction<Date>>,
    setDisplayDate: Dispatch<SetStateAction<Date>>,
    setIncrement: Dispatch<SetStateAction<number>>,
    setPreviousGap: Dispatch<SetStateAction<number>>,
    setNextGap: Dispatch<SetStateAction<number>>
} | undefined