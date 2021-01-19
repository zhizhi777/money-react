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
        width: 22px;
        height: 22px;
      }
      .selected{
        .icon{
          fill: rgb(249,219,97);
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
                    <NavLink to="/detail" activeClassName="selected">
                        <Icon name="mingxi" />
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" activeClassName="selected" exact>
                        <Icon name="money1" />
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart1" />
                        图表
                    </NavLink>
                </li>
            </ul>
        </Nav>
    )
}

export default Component;