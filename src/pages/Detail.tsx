import React, {useState} from "react";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import {Topbar} from "../components/Topbar";
import Aside from "./Detail/Aside";
import Main from "./Detail/Main";
import DatePickerBox from "./Detail/DatePickerBox";

const Component: React.FC = () => {
    const [toggleDate, setToggleDate] = useState(true)
    const [month, setMonth] = useState('2021-01')
    const datePickerToggle = () => {
        toggleDate ? setToggleDate(false) : setToggleDate(true)
    }

    return (
        <Layout>
            <Topbar><Icon/><span >小七记账</span><Icon/></Topbar>
            <Aside value={month} onchange={datePickerToggle}/>
            {
                toggleDate ? '' :
                    <DatePickerBox month={month} onchange={(month) => setMonth(month)}
                                   datePickerToggle={datePickerToggle}/>
            }
            <Main value={month}/>
        </Layout>
    );

}

export default Component;