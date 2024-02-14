import DateInput from './DateInput'
import NumberInput from './NumberInput'

const Setup = () => {
    return (
        <div className='flex flex-col gap-2 justify-between'>
            <DateInput type='Start' />
            <DateInput type='Display' />
            <NumberInput type='StartingValue' />
            <NumberInput type='Increment' />
        </div>
    )
}

export default Setup