import React from "react";
import styled from "styled-components";

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output{
    background: #f5f5f5;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    padding: 10px 10px;
    box-shadow: inset 0 -3px 3px -3px rgba(0,0,0,0.2),
                inset 0 3px 3px -3px rgba(0,0,0,0.2);
    overflow: auto;
  }
  > .pad{
    & > button:nth-child(1),
    button:nth-child(5),
    button:nth-child(9),
    button:nth-child(13) {
      border-left: none;
    }
    > button{
      float: left;
      width: 25%;
      height: 54px;
      border: none;
      border-left: 1px solid rgb(210,210,210);
      border-top: 1px solid rgb(210,210,210);
      background-color: #f5f5f5;
      &.OK{
        height: 108px;
        float: right;
        background-color: rgb(249,219,97);
      }
      &.zero{
        width: 50%;
      }
    }
  }
`

type Props = {
    value: string;
    onChange: (value: string) => void;
    onOk?: () => void;
}

const Component: React.FC<Props> = (props) => {
    // const [output, _setOutput] = useState('0')
    const output = props.value

    const setOutput = (output: string) => {
        if(output.length > 10){
            output = output.slice(0,10)
        } else if(output.length === 0){
            output = '0'
        }
        props.onChange(output)
    }
    const onClickNumber = (e: React.MouseEvent) => {
      const text = (e.target as HTMLButtonElement).textContent
        if(text === null){return;}
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
                if(props.onOk){
                    props.onOk()
                }
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
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="OK">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </NumberSection>
    )
}


export default Component