import React, { useEffect, useState } from 'react'
import '../style/Input.css'

export default function Input({ id, label, req, move, isShort, type, link }) {
    const [onFocus, setOnFocus] = useState('')
    const [dropdownChoose, setDropdownChoose] = useState('')

    useEffect(() => {
        if (onFocus !== '') {
            document.getElementById('input-' + onFocus).focus()
            if (onFocus === 'direction') {
                document.getElementById('dropdown-on').style.visibility = 'visible'
            }
            else document.getElementById('dropdown-on').style.visibility = 'hidden'
        }
        setOnFocus('')

    }, [onFocus])

    function dropChoose() {
        setDropdownChoose('Биология')
        setOnFocus('')
    }

    useEffect(() => {
        document.getElementById('input-direction').value = dropdownChoose
        setOnFocus('')
        document.getElementById('dropdown-on').style.visibility = 'hidden'
    }, [dropdownChoose])

    const className = 'input' + (isShort ? ' input_short' : '') + (req ? ' input_req' : '') + (move ? ' input_move' : '')
    return (
        id !== 'direction' ?
            <div className={className} onClick={() => setOnFocus(id)} >
                <input className='input__field' type={type ? type : 'text'} id={'input-' + id} pattern={type === 'tel' ? '[+,0-9]{12}' : null} placeholder=' ' required={req ? req : false} />
                <label className='input__label' htmlFor={'input-' + id}>
                    {req ? <div className='required required_move'>✱</div> : null}
                    <div className='input__text'>{label}</div>
                </label>
                {link ? <img className='input__image input__image_enabled' src={link ? 'images/' + link + '.png' : null} /> : null}
            </div > :
            <div className={className} onClick={() => setOnFocus(id)} >
                <input className='input__field' type={type ? type : 'text'} id={'input-' + id} pattern={type === 'tel' ? '[+,0-9]{12}' : null} placeholder=' ' required={req ? req : false} readOnly />
                <label className='input__label' htmlFor={'input-' + id}>
                    {req ? <div className='required required_move'>✱</div> : null}
                    <div className='input__text'>{label}</div>
                </label>
                <div id='dropdown-on' className='input__dropdown'>
                    <ul className='list'>
                        <li className='list__item' onClick={() => setDropdownChoose('Экология')}>Экология</li>
                        <li className='list__item' onClick={() => setDropdownChoose('Политика')}>Политика</li>
                        <li className='list__item' onClick={() => setDropdownChoose('Экономика')}>Экономика</li>
                    </ul>
                </div>
                <div className='input__image input__image_enabled'>
                    <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div >
    )
}