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
    return {tags, setTags, findTag}
}

export {useTags}