import React, {useState} from "react";
import Layout from "../components/Layout";
import {TypeSection} from "./Money/index";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import {day, timeRule} from "../components/day";

const StaWrapper = styled.div`
  display: flex;
  height: calc(100vh - 54px);
  flex-direction: column;
  .date-list {
    overflow: auto;
  }
`
const TypeWrapper = styled.div`
  background-color: rgb(249,219,97);
  position: relative;
  > .title{
    text-align: center;
    line-height: 20px;
    padding: 14px 16px 4px 16px;
  }
  > .type-control{
    position: fixed;
    top: 86px;
    left: 0;
    background-color: #fff;
    z-index: 2;
    > ul li {
      display: block;
      width: 100vw;
      padding: 10px 16px;
      &:first-child{
        border-bottom: 1px solid rgb(227,227,227);
      }
    }
   &::after{
     content: '';
     position: fixed;
     top: 160px;
     left: 0;
     bottom: 0;
     right: 0;
     background-color: rgba(0,0,0,0.2);
     z-index: 1;
   }
  }
`
const Duration = styled.ul`
    padding: 10px 16px;
    width: 100vw;
    background-color: rgb(249,219,97);
    margin: 0 auto;
    display: flex;
    > li{
      flex: 1;
      padding: 3px 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      border:1px solid rgb(51,50,51);
      background-color: rgb(249,219,97);
      color: rgb(51,50,51);
      &.selected{
        background-color: rgb(51,50,51);
        color: rgb(249,219,97);
      }
    }
    > li:first-child{
      border-radius: 10px 0 0 10px;
      border-right: none;
    }
    > li:last-child{
      border-left: none;
      border-radius: 0 10px 10px 0;
    }
  
`
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    font-size: 16px;
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

const Component = () => {
    const stateMap = {'-':'支出', '+':'收入'}
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {getTag} = useTags()
    const hash: { [K: string]: RecordItem[] } = {}
    const selectedRecords = records.filter(r => r.moneyType === category)

    selectedRecords.forEach(r => {
        const key = day(r.createAt).format('YYYY-MM-DD')
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })

    const durationMap = {'week':'周', 'month':'月', 'year':'年'}
    type duration = keyof typeof durationMap
    const [durationList] = useState<duration[]>(['week','month','year'])
    const [selected, setSelected] = useState<'week'|'month'|'year'>('week')

    const [toggle, setToggle] = useState(false)
    const onToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    console.log(toggle);
    return (
        <Layout>
            <StaWrapper>
                <TypeWrapper>
                    <div className='title' onClick={onToggle}>{stateMap[category]}▼</div>
                    {
                        toggle ? (<div className='type-control'>
                            <TypeSection  value={category}
                                          onChange={value => {
                                              setCategory(value)
                                              setToggle(false)
                                          }}/>
                        </div>):''

                    }
                </TypeWrapper>

                <Duration>
                    {durationList.map(item =>
                        <li key={item}
                            className={selected===item ? "selected":""}
                            onClick={()=> toggle?'':setSelected(item)}>
                            {durationMap[item]}
                        </li>
                    )}
                </Duration>
                <div className='date-list'>
                {
                    array.map(([date, records]) =>
                        <div key={date}>
                            <Header>{timeRule(date)}</Header>
                            <div>
                                {records.map((r, index) =>  (
                                        <Item key={index}>
                                            <div className='tags oneLine'>
                                                    <span>{getTag(r.tagId).name}</span>
                                            </div>
                                            {r.note && <div className='note oneLine'>{r.note}</div>}
                                            <div className='amount'>￥{r.amount}</div>
                                        </Item>
                                    )
                                )}
                            </div>
                        </div>
                    )

                }
                </div>
            </StaWrapper>
        </Layout>
    );
}


export default Component;