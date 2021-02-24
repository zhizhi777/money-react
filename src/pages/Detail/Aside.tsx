import styled from "styled-components";
import React from "react";
import {useRecords} from "../../hooks/useRecords";

const Aside = styled.aside`
  padding: 10px 20px;
  background-color: rgb(249, 219, 97);
  display: flex;
  text-align: left;
  justify-content: space-between;
  > div {
    width: 35%;
    margin-left: 30px;
    > .date-month {
      border-right: 1px solid #333233;
    }
    > span {
      display: block;
      font-size: 14px;
      color: rgb(115, 104, 62);
    }
    > div {
      margin-top: 16px;
      font-size: 22px;
      > .lesser {
        font-size: 18px;
      }
    }
  }
  > div:first-child {
    width: 30%;
    margin-left: 0;
  }
`

type Props = {
    value: string;
    onchange: () => void;
}

const Component:React.FC<Props> = (props) => {
    const {sumAmountByType, getAmountByDate} = useRecords()
    const records = getAmountByDate(props.value)
    return (
        <Aside>
            <div onClick={props.onchange}>
                <span>{props.value.split('-')[0]}年</span>
                <div className='date-month'>{props.value.split('-')[1]}月<span className='lesser'>▼</span></div>
            </div>
            <div>
                <span>收入</span>
                <div>{sumAmountByType('+', records)}</div>
            </div>
            <div>
                <span>支出</span>
                <div>{sumAmountByType('-', records)}</div>
            </div>
        </Aside>
    )
}



export default Component
