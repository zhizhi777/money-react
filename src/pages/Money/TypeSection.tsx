import React, {useState} from "react";

type Props = {
    value: '-' | '+';
    onChange: (value: '-' | '+')=>void
}

const Component: React.FC<Props> = (props) => {
    const stateMap = {'-':'支出', '+':'收入'}
    type states = keyof typeof stateMap
    const [stateList] = useState<states[]>(['-','+'])

    return (
        <>
            <ul>
                {stateList.map(item =>
                    <li key={item} className={props.value===item ? "selected":""} onClick={()=> props.onChange(item)}>{stateMap[item]}</li>
                )}
            </ul>
        </>
    )
}

export default Component