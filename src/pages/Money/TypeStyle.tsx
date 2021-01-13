import styled from "styled-components";

const TypeStyle = styled.section`
  font-size: 16px;
  background-color: rgb(249,219,97);
  > ul{
    display: flex;
    justify-content: center;
    > li:last-child{
      margin-left: 10px;
    }
    > li{
      text-align: center;
      padding: 20px 6px 8px;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 1px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`

export {TypeStyle}

