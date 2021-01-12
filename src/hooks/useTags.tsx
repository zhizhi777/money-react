import {useEffect, useState} from "react";
import {CreateId} from "../lib/createId";
import {useUpdate} from "./useUpdate";

// 自定义hook
function useTags() {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([])
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '')
        if (localTags.length === 0) {
            localTags = [
                {id: CreateId(), name: '衣'},
                {id: CreateId(), name: '食'},
                {id: CreateId(), name: '住'},
                {id: CreateId(), name: '行'}
            ]
        }
        setTags(localTags)
    }, []);

    useUpdate(()=>{
        window.localStorage.setItem('tags', JSON.stringify(tags))
    }, [tags])


    const findTag = (id: string) => tags.filter(item => item.id === parseInt(id))[0]
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result
    }
    const updateTag = (id: number, obj: { name: string }) => {
        // const index = findTagIndex(id);
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // tagsClone.splice(index, 1, {id: id, name: obj.name});
        // setTags(tagsClone);
        setTags(tags.map(tag => id === tag.id ? {id, name: obj.name} : tag));
    }
    const deleteTag = (id: number) => {
        // const index = findTagIndex(id);
        // const tagsClone = JSON.parse(JSON.stringify(tags));
        // tagsClone.splice(index, 1);
        // setTags(tagsClone);
        setTags(tags.filter((tag) => tag.id !== id))
        console.log('删除');
        console.log(tags.filter((tag) => tag.id !== id));
    }
    const addTag = () => {
        const tagName = window.prompt('新标签名称为:')
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id: CreateId(), name: tagName}])
        }
    }

    const getName = (id:number) =>{
        const tag = tags.filter((tag) => tag.id === id)[0]
        return tag ? tag.name : ''
    }

    return {tags, getName, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag}
}

export {useTags}