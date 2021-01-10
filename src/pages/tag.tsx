import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "../useTags";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Button from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {BtnBox} from "../components/Btnbox";

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background-color: #fff;
`
const InputWrapper = styled.div`
  background-color: #fff;
  padding: 0 16px;
  margin-top: 8px;
`

type Params = {
    id: string
}
const Tag: React.FC = () => {
    const {updateTag, findTag, deleteTag} = useTags()
    let {id} = useParams<Params>()
    const tag = findTag(id)

    return (
        <Layout>
            <Topbar>
                <Icon name='left'></Icon>
                <span>编辑标签</span>
                <Icon name=''></Icon>
            </Topbar>
            {
                tag ? <div>
                    <InputWrapper>
                        <Input label='标签名'
                               value={tag.name}
                               type='text'
                               placeholder='标签名'
                               onChange={(e)=>{
                                   updateTag(tag.id, {name: e.target.value});
                               }}/>
                    </InputWrapper>
                    <BtnBox>
                        <Button onClick={()=>{
                            deleteTag(tag.id);
                        }}>删除标签</Button>
                    </BtnBox>
                </div> : <div>删除成功！</div>
            }
        </Layout>
    )
}

export default Tag