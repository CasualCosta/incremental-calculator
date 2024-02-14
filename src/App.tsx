import { useState } from 'react'

import './App.css'
import { AppContext } from './AppContext'
import Setup from './components/Setup'
import ValueDisplay from './components/ValueDisplay'

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [displayDate, setDisplayDate] = useState<Date>(new Date())
  const [startValue, setStartValue] = useState<number>(1)
  const [increment, setIncrement] = useState<number>(1)
  const [previousGap, setPreviousGap] = useState<number>(0)
  const [nextGap, setNextGap] = useState<number>(0)


  return (
    <AppContext.Provider value={{
      startDate, displayDate, startValue, increment, previousGap, nextGap, setStartDate, setDisplayDate, setStartValue, setIncrement, setPreviousGap, setNextGap
    }}>
      <div className='flex flex-col items-center mx-auto'>
        <Setup />
        <div className='flex gap-4'>
          <ValueDisplay date={displayDate} offset={-1} />
          <ValueDisplay date={displayDate} offset={0} />
          <ValueDisplay date={displayDate} offset={1} />
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
