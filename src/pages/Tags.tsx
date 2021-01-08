import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/Icon";
import {Link} from "react-router-dom";

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
const Button = styled.button`
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  line-height: 20px;
  padding: 8px 12px;
  border: none;
  background-color: #f60;
`
const BtnBox = styled.div`
  text-align: center;
  margin: 16px 0;
`

const Component = () => {
    const {tags} = useTags()
    return (
        <Layout>
            <TagList>
                {tags.map(item =>
                    <li key={item.id}>
                        <Link to={'/tags/' + item.id}>
                            <span className='oneLine'>{item.id} {item.name}</span>
                            <Icon name='right'/>
                        </Link>
                    </li>
                )}
            </TagList>
            <BtnBox>
                <Button>新建标签</Button>
            </BtnBox>

        </Layout>
    );
}

export default Component;