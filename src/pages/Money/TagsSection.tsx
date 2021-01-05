import React, {useState} from "react";
import styled from "styled-components";

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

const Component: React.FC = (props) => {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('新标签名称为:')
        if(tagName!==null){
            setTags([...tags, tagName])
        }
    }

    const setToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag)
        if(index >= 0){
            setSelectedTags(selectedTags.filter(t => t!==tag))
        }else{
            setSelectedTags([...selectedTags, tag])
        }
    }

    return (
        <TagsSection>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => setToggleTag(tag)}  className={selectedTags.indexOf(tag)>=0 ? 'selected':''}>{tag}</li>
                )}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </TagsSection>
    )
}


export default Component;