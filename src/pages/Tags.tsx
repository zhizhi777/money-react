import React, {useState} from "react";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link, useHistory} from "react-router-dom";
import Button from "../components/Button";
import {BtnBox} from "../components/Btnbox";
import TypeSection from "./Money/TypeSection";
import {Topbar} from "../components/Topbar";
import {IconBox} from "../components/IconBox";


const TagType = styled.div`
  padding: 5px 0 10px;
  background-color: rgb(249,219,97);
  > ul{
    width: 80%;
    margin: 0 auto;
    display: flex;
    > li{
      flex: 1;
      padding: 5px 0;
      font-size: 14px;
      text-align: center;
      border:1px solid rgb(51,50,51);
      background-color: rgb(249,219,97);
      color: rgb(51,50,51);
      &.selected{
        background-color: rgb(51,50,51);
        color: rgb(249,219,97);
      }
    }
    > li:first-child{
      border-radius: 10px 0 0 10px;
      border-right: none;
    }
    > li:last-child{
      border-left: none;
      border-radius: 0 10px 10px 0;
    }
  }
`
const TagList = styled.ol`
  background-color: #fff;
  padding: 0 10px;
  font-size: 16px;

  > li {
    border-bottom: 1px solid #d5d5d9;
    
    > a {
      padding: 10px 6px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .tag-title{
        margin-right: auto;
        margin-left: 16px;
      }
    }
  }

  > li:last-child {
    border-bottom: none;
  }
`

type  MoneyType = '-' | '+'

const Component = () => {
    const [selected, setSelected] = useState<MoneyType>('-')
    const {getTypeTag, addTag} = useTags()
    const history = useHistory()

    return (
        <div>
            <Topbar>
                <Icon name='left' onClick={()=>history.goBack()} />
                <span>编辑标签</span>
                <Icon />
            </Topbar>

            <TagType>
                <TypeSection value={selected} onChange={item=>setSelected(item)}/>
            </TagType>

            <TagList>
                {getTypeTag(selected).map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/' + tag.id}>
                            <IconBox><Icon name={tag.icon}/></IconBox>
                            <span className='tag-title oneLine'>{tag.name}</span>
                            <Icon name='right'/>
                        </Link>
                    </li>
                )}
            </TagList>
            <BtnBox>
                <Button onClick={()=>addTag(selected)}>新建标签</Button>
            </BtnBox>

        </div>
    );
}

export default Component;