import {useState} from "react";
import {CreateId} from "./lib/createId";


const defaultTags = [
    {id: CreateId(), name: '衣'},
    {id: CreateId(), name: '食'},
    {id: CreateId(), name: '住'},
    {id: CreateId(), name: '行'}
]

// 自定义hook
function useTags() {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)
    const findTag = (id: string) => tags.filter(item => item.id === parseInt(id))[0]
    const findTagIndex = (id: number) => {
        let result = -1;
        for(let i = 0; i < tags.length; i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, obj:{name: string}) => {
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1, {id: id, name: obj.name});
        setTags(tagsClone);
    }
    const deleteTag = (id: number) =>{
        const index = findTagIndex(id);
        const tagsClone = JSON.parse(JSON.stringify(tags));
        tagsClone.splice(index, 1);
        setTags(tagsClone);

    }
    return {tags, setTags, findTag, findTagIndex, updateTag, deleteTag}
}

export {useTags}