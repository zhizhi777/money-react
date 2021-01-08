import React from "react";
import {useParams} from "react-router-dom";
import {useTags} from "../useTags";
import Layout from "../components/Layout";

type Params = {
    id: string
}
const Tag: React.FC = () => {
    const {findTag} = useTags()
    const {id} = useParams<Params>()
    const tag = findTag(id)

    return (
        <Layout>
             <div>{tag.name}</div>
        </Layout>
    )
}

export default Tag