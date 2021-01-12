import React, {useState} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection, NoteSection, TypeSection, NumberSection} from "./Money/index";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
const TypeWrapper = styled.div`
  background-color: #c4c4c4;
`

type  MoneyType = '-' | '+'

const defaultMoney = {
    tagIds: [] as number[],
    note: '',
    moneyType: '-' as MoneyType,
    amount: '0'
}

const Component = () => {
    const [selected, setSelected] = useState(defaultMoney)
    const {addRecord} = useRecords()
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    const onSubmit = () => {
        if(addRecord(selected)){
            addRecord(selected)
            alert('保存成功')
            setSelected(defaultMoney)
        }
    }
    return (
        <MyLayout scrollTop={9999}>
            <TagsSection tagIds={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <TypeWrapper>
                <TypeSection value={selected.moneyType} onChange={moneyType => onChange({moneyType})}/>
            </TypeWrapper>
            <NumberSection value={selected.amount} onChange={amount => onChange({amount})}
                           onOk={onSubmit}/>
        </MyLayout>
    );
}

export default Component;