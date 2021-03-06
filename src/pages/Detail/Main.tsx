import {day, weekRule} from "../../components/day";
import {IconBox} from "../../components/IconBox";
import Icon from "../../components/Icon";
import React from "react";
import {useTags} from "../../hooks/useTags";
import styled from "styled-components";
import {RecordItem, useRecords} from "../../hooks/useRecords";
import Notyet from "../NotYet";

const ListByDay = styled.div`
  background-color: #fff;

  > .title {
    font-size: 13px;
    padding: 10px;
    color: rgb(150, 150, 150);
    display: flex;
    border-bottom: 1px solid rgb(227, 227, 227);

    > span:last-child {
      margin-left: auto;
    }
  }

  > ul li {
    display: flex;
    align-items: center;

    > .iconBox {
      margin: 0 16px;
    }

    > .listItem {
      padding: 16px 10px 16px 0;
      flex: 1;
      display: flex;

      > span:first-child {
        font-size: 14px;
        flex: 1;
      }
    }

    > div:last-child {
      border-bottom: 1px solid #EBEBEB;
    }
  }

  > ul li:last-child > div:last-child {
    border-bottom: none;
  }
`
const Main = styled.main`
  height:calc(100% - 128px);
`
type Props = {
    value: string
}

const Component:React.FC<Props> = (props) => {
    const {sumAmountByType, getAmountByDate} = useRecords()
    let month = props.value
    const {getTag} = useTags()

    const selectedRecords = getAmountByDate(month)
    const hash: { [K: string]: RecordItem[] } = {}

    selectedRecords.forEach(r => {
        const key = day(r.createAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r)
        // console.log(hash)
    })
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    const getTagById = (id: number) => getTag(id)
    return (
        <Main>
            { array.length === 0 ? <Notyet /> : array.map(([date, records]) =>
                    <ListByDay key={date}>
                        <div className='title'>
                            <span>{day(date).format('MM-DD')} {weekRule(day(date).format('dddd'))}</span>
                            <span>
                                {sumAmountByType('+', records) === 0 ? '' :
                                    <span>　收入：{sumAmountByType('+', records)}</span>}
                                {sumAmountByType('-', records) === 0 ? '' :
                                    <span>　支出：{sumAmountByType('-', records)}</span>}
                            </span>
                        </div>
                        <ul>
                            {
                                records.map((record) =>
                                    <li key={record.createAt}>
                                        <IconBox className='iconBox'>
                                            <Icon name={getTagById(record.tagId).icon}/>
                                        </IconBox>
                                        <div className='listItem'>
                                            <span>{getTagById(record.tagId).name}</span>
                                            <span>{record.moneyType === '-' ? record.moneyType : ''}
                                                {record.amount}</span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </ListByDay>
                )
                
                      
            }

        </Main>
    )
}



export default Component
