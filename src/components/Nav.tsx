import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";

const Nav =  styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  background-color: #fff;
  >ul{
    display: flex;
    >li{
      width: 33.33333%;
      padding: 4px 0;
      text-align: center;
      a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .icon{
        width: 24px;
        height: 24px;
      }
      .selected{
        color: blue;
        .icon{
          fill: blue;
        }
      }
      
    }
  }
`

const Component = ()=>{
    return (
        <Nav>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag" />
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" activeClassName="selected" exact>
                        <Icon name="money" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart" />
                        统计
                    </NavLink>
                </li>
            </ul>
        </Nav>
    )
}

export default Component;