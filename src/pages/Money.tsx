import React, {useState} from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection, NoteSection, TypeSection, NumberSection} from "./Money/index";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type  MoneyType = '-' | '+'

const Component = () => {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        moneyType: '-' as MoneyType,
        amount: '0'
    })
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    return (
        <MyLayout>
            <TagsSection tagIds={selected.tagIds} onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note} onChange={note => onChange({note})}/>
            <TypeSection value={selected.moneyType} onChange={moneyType => onChange({moneyType})}/>
            <NumberSection value={selected.amount} onChange={amount => onChange({amount})}
                           onOk={() => console.log('ok')}/>
        </MyLayout>
    );
}

export default Component;