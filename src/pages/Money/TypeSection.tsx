import React, {useState} from "react";
import styled from "styled-components";

const TypeSection = styled.section`
  font-size: 24px;
  > ul{
    display: flex;
    background-color: #c4c4c4;
    > li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

const Component: React.FC = () => {
    const stateMap = {'-':'支出', '+':'收入'}
    type states = keyof typeof stateMap
    const [stateList] = useState<states[]>(['-','+'])
    const [state, setState] = useState('-')

    return (
        <TypeSection>
            <ul>
                {stateList.map(item =>
                    <li key={item} className={state===item ? "selected":""} onClick={()=> setState(item)}>{stateMap[item]}</li>
                )}
            </ul>
        </TypeSection>
    )
}


export default Component