import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import '../style/Table.css'
import { Link } from 'react-router-dom'

export default function Table() {
    const [data, setData] = useState([])
    const [immortalData, setImmortalData] = useState([])

    const [sortFl, setSortFl] = useState({ key: undefined, direction: undefined })
    const [searchString, setSearchString] = useState({ value: '', length: 0 })
    useEffect(() => {
        const getData = async () => {
            const resp = await axios(
                'https://jsonplaceholder.typicode.com/posts'
            )
            setData(resp.data)
            setImmortalData(resp.data)
        }
        getData()
    }, [])

    const sortData = useMemo(() => {
        return immortalData.sort((a, b) => {
            if (a[sortFl.key] < b[sortFl.key]) {
                return sortFl.direction === 'down' ? -1 : 1
            }
            if (a[sortFl.key] > b[sortFl.key]) {
                return sortFl.direction === 'down' ? 1 : -1
            }
            return 0
        })
    }, [immortalData, sortFl])

    function setSortReq(key) {
        if (sortFl.key === key && sortFl.direction === 'down') {
            setSortFl({ key, direction: 'up' })
        }
        else setSortFl({ key, direction: 'down' })
        return { immortalData: sortData }
    }

    useEffect(() => {
        // setImmortalData(...data)
        // if (searchString.value != '' && searchString.value.length > searchString?.length) {
        searching()
        // }
        // else setImmortalData(...data)
    }, [searchString])

    function searching() {
        searchString.length > 2 ? setImmortalData(findData) : setImmortalData(data)
    }


    const findData = useMemo(() => {
        return searchString.value.length > searchString?.length ? immortalData.filter(
            elem =>
                JSON.stringify(elem)?.toUpperCase().includes(searchString.value.toUpperCase())
        ) : 
        data.filter(
            elem =>
                JSON.stringify(elem)?.toUpperCase().includes(searchString.value.toUpperCase())
        )
    }, [searchString])

    return (
        <>
            <Link to='/'>
                <button>Назад</button>
            </Link>
            <div className='table'>
                <input type='text' className='table__input' placeholder='Поиск' onChange={e => setSearchString({ value: e.target.value, length: searchString.value.length })}></input>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => setSortReq('id')}>id</th>
                            <th onClick={() => setSortReq('userId')}>userId</th>
                            <th onClick={() => setSortReq('title')}>title</th>
                            <th onClick={() => setSortReq('body')}>body</th>
                        </tr>
                    </thead>
                    <tbody id='table-body'>

                        {immortalData?.map((elem, index) => <tr key={index}>
                            <td >{elem?.id}</td>
                            <td >{elem?.userId}</td>
                            <td >{elem?.title}</td>
                            <td >{elem?.body}</td>
                        </tr >)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}