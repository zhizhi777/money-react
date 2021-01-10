import React from "react";
import styled from "styled-components";
import {useTags} from "../../useTags";
import {CreateId} from "../../lib/createId";
import Button from "../../components/Button";

const TagsSection = styled.section`
  background-color: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  > ol{
    margin: 0 -12px;
    > li{
      border-radius: 18px;
      background-color: #D9D9D9;
      display: inline-block;
      padding: 3px 16px;
      font-size: 14px;
      margin: 6px 12px;
      &.selected{
        background-color: aquamarine;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 0 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

type Props = {
    tagIds: number[],
    onChange: (tagIds: number[])=>void
}

const Component: React.FC<Props> = (props) => {
    const {tags, setTags} = useTags()
    const selectedTags = props.tagIds
    const onAddTag = () => {
        const tagName = window.prompt('新标签名称为:')
        if(tagName!==null){
            setTags([...tags, {id: CreateId(), name:tagName}])
        }
    }

    const setToggleTag = (tagId: number) => {
        const index = selectedTags.indexOf(tagId)
        if(index >= 0){
            props.onChange(selectedTags.filter(t => t!==tagId))
        }else{
            props.onChange([...selectedTags, tagId])
        }
    }

    return (
        <TagsSection>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => setToggleTag(tag.id)}  className={selectedTags.indexOf(tag.id)>=0 ? 'selected':''}>{tag.name}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagsSection>
    )
}


export default Component;