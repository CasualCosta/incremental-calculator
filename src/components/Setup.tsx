import CheckBoxInput from './CheckBoxInput'
import DateInput from './DateInput'
import NumberInput from './NumberInput'

const Setup = () => {
    const DESC_WIDTH = 32
    const INPUT_WIDTH = 32
    const GAP = 4
    return (
        <div className='flex flex-col gap-2 justify-center text-left px-16'>
            <DateInput type='Start' descWidth={DESC_WIDTH} inputWidth={INPUT_WIDTH} gap={GAP} />
            <DateInput type='Display' descWidth={DESC_WIDTH} inputWidth={INPUT_WIDTH} gap={GAP} />
            <NumberInput type='StartingValue' descWidth={DESC_WIDTH} inputWidth={INPUT_WIDTH} gap={GAP} />
            <NumberInput type='Increment' descWidth={DESC_WIDTH} inputWidth={INPUT_WIDTH} gap={GAP} />
            <CheckBoxInput type='WHOLE_NUMBER' descWidth={DESC_WIDTH} inputWidth={INPUT_WIDTH} gap={GAP} />
        </div>
    )
}

export default Setup