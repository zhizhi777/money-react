import React, {useState} from "react";
import Layout from "../components/Layout";
import {TypeSection} from "./Money/index";
import styled from "styled-components";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import day from 'dayjs'

const TypeWrapper = styled.div`
  background-color: #fff;
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
    const [category, setCategory] = useState<'-' | '+'>('-')
    const {records} = useRecords()
    const {getName} = useTags()
    const hash: { [K: string]: RecordItem[] } = {}
    const selectedRecords = records.filter(r => r.moneyType === category)

    selectedRecords.forEach(r => {
        const key = day(r.createAt).format('YYYY年MM月DD日')
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

    return (
        <Layout>
            <TypeWrapper>
                <TypeSection value={category} onChange={value => setCategory(value)}/>
            </TypeWrapper>
            {

                array.map(([date, records], index) =>
                    <div key={index}>
                        <Header>{date}</Header>
                        <div>
                            {records.map((r, index) => {
                                return (
                                    <Item key={index}>
                                        <div className='tags oneLine'>{r.tagIds
                                            .map(tagId =>
                                                <span key={tagId}>{getName(tagId)}</span>
                                            )}
                                        </div>
                                        {r.note && <div className='note oneLine'>{r.note}</div>}
                                        <div className='amount'>￥{r.amount}</div>
                                    </Item>
                                )
                            })}
                        </div>
                    </div>
                )

            }

        </Layout>
    );
}


export default Component;