import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../hooks/useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";
import Button from "../components/Button";
import {BtnBox} from "../components/Btnbox";

const TagList = styled.ol`
  background-color: #fff;
  padding: 0 10px;
  font-size: 16px;

  > li {
    border-bottom: 1px solid #d5d5d9;

    > a {
      padding: 12px 6px;
      line-height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  > li:last-child {
    border-bottom: none;
  }
`


const Component = () => {
    const {tags, addTag} = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(item =>
                    <li key={item.id}>
                        <Link to={'/tags/' + item.id}>
                            <span className='oneLine'>{item.name}</span>
                            <Icon name='right'/>
                        </Link>
                    </li>
                )}
            </TagList>
            <BtnBox>
                <Button onClick={addTag}>新建标签</Button>
            </BtnBox>

        </Layout>
    );
}

export default Component;