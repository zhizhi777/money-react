import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";

const Nav =  styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 33.33333%;
      padding: 10px;
      text-align: center;
      
    }
  }
`

const Component = ()=>{
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">记账</Link>
                </li>
                <li>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </Nav>
    )
}

export default Component;