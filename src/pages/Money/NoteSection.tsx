import React, {useState} from "react";
import styled from "styled-components";

const NoteSection = styled.section`
  background-color: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label{
    display: flex;
    align-items: center;
    > span {margin-right: 16px; white-space: nowrap;}
    > input {
      display: block;
      flex: 1;
      height: 62px;
      background: none;
      border: none;
    }
  }
`

const Component: React.FC = ()=>{
    const [note, setNote] = useState('')
    const refInput = React.useRef<HTMLInputElement>(null)
    const onBlurInput = () => {
        if(refInput.current!==null){
            setNote(refInput.current.value)
        }
    }

    return (
        <NoteSection>
            <label>
                <span>备注</span>
              {/*受控组件：<input type="text" placeholder="在这里添加备注" value={note} onChange={(e)=>setNote(e.target.value)}/>*/}
                <input placeholder="在这里添加备注" type="text" defaultValue={note} ref={refInput} onBlur={onBlurInput}/>
            </label>
        </NoteSection>
    )
}


export default Component