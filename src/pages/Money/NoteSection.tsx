import React, {ChangeEventHandler, useState} from "react";
import styled from "styled-components";
import {Input} from "../../components/Input";

const NoteSection = styled.section`
  background-color: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  
`
type Props = {
    value: string,
    onChange: (value: string)=>void
}

const Component: React.FC<Props> = (props)=>{
    const [note, setNote] = useState('')
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setNote(e.target.value)


    // 非受控组件
    // const refInput = React.useRef<HTMLInputElement>(null)
    // const onBlurInput = () => {
    //     if(refInput.current!==null){
    //         props.onChange(refInput.current.value)
    //     }
    // }

    return (
        <NoteSection>
            <Input label='备注'
                   onChange={onChange}
                   placeholder="在这里添加备注"
                   value={note}
                   type="text"/>

              {/*受控组件：<input type="text"
                     placeholder="在这里添加备注"
                     value={note}
                     onChange={onChange}/>*/}
              {/* 非受控组件 <input placeholder="在这里添加备注"
                      type="text"
                      defaultValue={props.value}
                      ref={refInput}
                      onBlur={onBlurInput}/>*/}

        </NoteSection>
    )
}


export default Component