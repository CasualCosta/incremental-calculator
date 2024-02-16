import { useState, useEffect } from 'react'
import './App.css'
import { AppContext } from './AppContext'
import Setup from './components/Setup'
import ValueDisplay from './components/ValueDisplay'
import ArrowButton from './components/ArrowButton'
import Links from './components/Links'
import Tip from './components/Tip'
import Description from './components/Description'

function App() {
  const [startDate, setStartDate] = useState<Date>(new Date(2024,0,1))
  const [displayDate, setDisplayDate] = useState<Date>(new Date())
  const [startValue, setStartValue] = useState<number>(10)
  const [increment, setIncrement] = useState<number>(1)
  const [previousGap, setPreviousGap] = useState<number>(0)
  const [nextGap, setNextGap] = useState<number>(0)
  const [wholeNumber, setWholeNumber] = useState(true)

  function handleInput(event: KeyboardEvent): void {
    if(event.key !== "ArrowLeft" && event.key !== "ArrowRight"){
      return
    }
    const offsetDate = new Date(displayDate)
    offsetDate.setDate(displayDate.getDate() + (event.key === "ArrowLeft" ? -1 : 1))
    setDisplayDate(offsetDate)
  }
  useEffect(() => {
    document.body.addEventListener('keydown', handleInput)
    return () => document.body.removeEventListener("keydown", handleInput)
    
  }, [displayDate])
  useEffect(() => {
    document.title = "Incremental calculator"
  })
  
  return (
    <AppContext.Provider value={{
      startDate, displayDate, startValue, increment, previousGap, nextGap, wholeNumber, setStartDate, setDisplayDate, setStartValue, setIncrement, setPreviousGap, setNextGap, setWholeNumber
    }}>
      <div 
        className='flex flex-col items-center mx-auto text-slate-400 gap-8'
      >
        <Description />
        <div className='flex gap-4'>
          <Setup />
          <Links />
        </div>
        <div className='flex justify-center gap-4'>
          <ValueDisplay date={displayDate} offset={-1} />
          <ArrowButton  direction='Left' />
          <ValueDisplay date={displayDate} offset={0} />
          <ArrowButton direction='Right' />
          <ValueDisplay date={displayDate} offset={1} />
        </div>
        <Tip />
      </div>
    </AppContext.Provider>
  )
}

export default App
