import CheckBoxInput from './CheckBoxInput'
import DateInput from './DateInput'
import NumberInput from './NumberInput'

const Setup = () => {
    const WIDTH = '96'
    const GAP = '4'
    return (
        <div className='flex flex-col gap-2 justify-between'>
            <DateInput type='Start' width={WIDTH} gap={GAP} />
            <DateInput type='Display' width={WIDTH} gap={GAP} />
            <NumberInput type='StartingValue' width={WIDTH} gap={GAP} />
            <NumberInput type='Increment' width={WIDTH} gap={GAP} />
            <CheckBoxInput type='WHOLE_NUMBER' width={WIDTH} gap={GAP} />
        </div>
    )
}

export default Setup