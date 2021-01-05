import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import {TagsSection, NoteSection, TypeSection, NumberSection} from "./Money/index";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const Component = ()=>{
    return (
        <MyLayout>
            <TagsSection />
            <NoteSection />
            <TypeSection />
            <NumberSection />
        </MyLayout>
    );
}

export default Component;