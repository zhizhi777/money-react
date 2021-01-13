import React from "react";
import styled from "styled-components";
import {useTags} from "../../hooks/useTags";
import Icon from "../../components/Icon";
import {useHistory} from "react-router-dom";


const TagsSection = styled.section`
  background-color: #ffffff;
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none
  }

  > ol {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin-top: 16px;
      width: 25%;
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      > span:first-child {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: rgb(245, 245, 245);
        display: inline-block;
        padding: 10px;
        font-size: 14px;

        > .icon {
          width: 100%;
          height: 100%;
          color: #333233;
        }

        &.selected {
          background-color: rgb(249, 219, 97);
        }
      }

      > span:last-child {
        margin-top: 6px;
        font-size: 14px;
        text-align: center;
      }

      > .btn:active {
        background-color: rgb(249, 219, 97);
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
    tagType: '-' | '+',
    onChange: (tagIds: number[]) => void
}

const Component: React.FC<Props> = (props) => {
    const {tags, addTag, getTypeTag} = useTags()
    const selectedTags = props.tagIds
    const history = useHistory()

    const setToggleTag = (tagId: number) => {
        const index = selectedTags.indexOf(tagId)
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t !== tagId))
        } else {
            props.onChange([...selectedTags, tagId])
        }
    }
const tagType = getTypeTag(props.tagType)

    return (
        <TagsSection>

            <ol>
                {tagType.map(tag =>
                    <li key={tag.id}>
                        <span onClick={() => setToggleTag(tag.id)}
                              className={selectedTags.indexOf(tag.id) >= 0 ? 'selected' : ''}>
                            <Icon name={tag.icon}/>
                        </span>
                        <span>{tag.name}</span>
                    </li>
                )}
                {/*()=>addTag(props.tagType)*/}
                <li>
                    <span onClick={()=>history.push('/tags')} className='btn'>
                        <Icon name="shezhi"/>
                    </span>
                    <span>设置</span>
                </li>
            </ol>

        </TagsSection>
    )
}


export default Component;