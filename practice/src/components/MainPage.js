import React, { useState } from 'react'
import ModalForm from './ModalForm'
import '../style/Form.css'
import { Link } from 'react-router-dom'

export default function MainPage() {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className='mainpage-field'>
                <button className='button' onClick={() => setActive(true)}>Стать партнёром</button><br />

                <Link to='/table'>
                    <button className='button' >Получить таблицу</button>
                </Link>
            </div>
            <ModalForm active={active} setActive={setActive} />

        </>
    )
}