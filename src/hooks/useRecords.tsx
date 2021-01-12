import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
    tagIds: number[]
    note: string
    moneyType: '-' | '+'
    amount: string
    createAt: string
}
type newRecordItem = Omit<RecordItem, 'createAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    }, [])

    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records))
}, [records])

    const addRecord = (newRecord: newRecordItem) => {
        if(newRecord.tagIds.length < 1 ){
            alert('请添加标签！')
            return false
        }
        if(parseFloat(newRecord.amount) <= 0){
            alert('请输入金额！')
            return false
        }
        // new Date(+ new Date() + 8 * 3600 * 1000
        const record = {...newRecord, createAt: (new Date().toISOString())}
        setRecords([...records, record]);
        return true
    }

    return {records, addRecord}
}