import React, {useState} from "react";
import styled from "styled-components";

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 10px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
    overflow: auto;
  }
  > .pad{
    > button{
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.OK{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1) {
        background-color: #F2F2F2;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background-color: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background-color: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background-color: #B8B8B8;
      }
      &:nth-child(12) {
        background-color: #9A9A9A;
      }
      &:nth-child(14) {
        background-color: #A9A9A9;
      }
    }
  }
`

const Component: React.FC = ()=>{
    const [output, _setOutput] = useState('0')
    const setOutput = (output:string) => {
        if(output.length>16){
            output = output.slice(0,16)
        } else if(output.length === 0){
            output = '0'
        }
        _setOutput(output)
    }
    const onClickNumber = (e: React.MouseEvent) => {
      const text = (e.target as HTMLButtonElement).textContent
        if(text===null){return;}
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(output === '0'){
                    setOutput(text)
                }else{
                    setOutput(output + text)
                }
                break;
            case '.':
                if(output.indexOf('.')>0){
                    break;
                }
                setOutput(output + text)
                break;
            case '删除':
                if(output.length === 1){
                    setOutput('0')
                }else{
                    setOutput(output.slice(0, -1))
                }
                break;
            case '清空':
                setOutput('0')
                break;
            case 'OK':
                console.log('OK')
                break;
            default:
                break;
        }
    }

    return (
        <NumberSection>
            <div className="output">
                {output}
            </div>
            <div className="pad clearfix" onClick={onClickNumber}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="OK">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </NumberSection>
    )
}


export default Component