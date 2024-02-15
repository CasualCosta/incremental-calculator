import { useState } from 'react'

import './App.css'
import { AppContext } from './AppContext'
import Setup from './components/Setup'
import ValueDisplay from './components/ValueDisplay'
import ArrowButton from './components/ArrowButton'

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [displayDate, setDisplayDate] = useState<Date>(new Date())
  const [startValue, setStartValue] = useState<number>(1)
  const [increment, setIncrement] = useState<number>(1)
  const [previousGap, setPreviousGap] = useState<number>(0)
  const [nextGap, setNextGap] = useState<number>(0)
  const [wholeNumber, setWholeNumber] = useState(true)


  return (
    <AppContext.Provider value={{
      startDate, displayDate, startValue, increment, previousGap, nextGap, wholeNumber, setStartDate, setDisplayDate, setStartValue, setIncrement, setPreviousGap, setNextGap, setWholeNumber
    }}>
      <div className='flex flex-col items-center mx-auto text-slate-400'>
        <Setup />
        <div className='flex gap-4 mt-16'>
          <ValueDisplay date={displayDate} offset={-1} />
          <ArrowButton direction='Left' />
          <ValueDisplay date={displayDate} offset={0} />
          <ArrowButton direction='Right' />
          <ValueDisplay date={displayDate} offset={1} />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
