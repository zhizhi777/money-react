import React from "react";
import {useHistory, useParams} from "react-router-dom";
import {useTags} from "../hooks/useTags";
import Icon from "../components/Icon";
import Button from "../components/Button";
import styled from "styled-components";
import {Input} from "../components/Input";
import {BtnBox} from "../components/Btnbox";
import {Topbar} from "../components/Topbar";



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
    const history = useHistory()

    return (
        <div>
            <Topbar>
                <Icon name='left' onClick={()=>history.goBack()} />
                <span>编辑标签</span>
                <Icon />
            </Topbar>
            {
                tag ? <div>
                    <InputWrapper>
                        <Input label='标签名'
                               value={tag.name}
                               type='text'
                               placeholder='标签名'
                               onChange={(e)=>{
                                   updateTag(tag.id, tag.type, tag.icon, {name: e.target.value});
                               }}/>
                    </InputWrapper>
                    <BtnBox>
                        <Button onClick={()=>{
                            deleteTag(tag.id);
                            setTimeout(()=>{
                                history.goBack()
                            },0)
                        }}>删除标签</Button>
                    </BtnBox>
                </div> : <div>删除成功！</div>
            }
        </div>
    )
}

export default Tag