import React, {useState} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection, NoteSection, TypeSection, NumberSection} from "./Money/index";
import {useRecords} from "../hooks/useRecords";
import {TypeStyle} from "./Money/TypeStyle";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
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
        <MyLayout>
            {/*{JSON.stringify(selected)}*/}
            <TypeStyle>
                <TypeSection value={selected.moneyType} onChange={(moneyType:MoneyType) => onChange({moneyType})}/>
            </TypeStyle>

            <TagsSection tagType={selected.moneyType} tagIds={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <NumberSection value={selected.amount} onChange={amount => onChange({amount})}
                           onOk={onSubmit}/>
        </MyLayout>
    );
}

export default Component;