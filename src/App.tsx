import { useState } from 'react'

import './App.css'
import { AppContext } from './AppContext'
import Setup from './components/Setup'

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [displayDate, setDisplayDate] = useState<Date>(new Date())
  const [increment, setIncrement] = useState<number>(1)
  const [previousGap, setPreviousGap] = useState<number>(0)
  const [nextGap, setNextGap] = useState<number>(0)

  return (
    <AppContext.Provider value={{
      startDate, displayDate, increment, previousGap, nextGap, setStartDate, setDisplayDate, setIncrement, setPreviousGap, setNextGap
    }}>
      <div>
        <Setup />
      </div>
    </AppContext.Provider>
  )
}

export default App
