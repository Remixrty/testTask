import React, { useEffect, useState } from 'react'
import '../style/Input.css'

export default function Input({ id, label, req, move, isShort, type, link }) {
    const [onFocus, setOnFocus] = useState('')

    useEffect(() => {
        if (onFocus !== '') {
            document.getElementById('input-' + onFocus).focus()
            setOnFocus('')
        }
    }, [onFocus])

    const className = 'input' + (isShort ? ' input_short' : '') + (req ? ' input_req' : '') + (move ? ' input_move' : '')
    return (
        <div className={className} onClick={() => setOnFocus(id)} >
            <input className='input__field' type={type ? type : 'text'} id={'input-' + id} pattern={type === 'tel' ? '[+,0-9]{12}' : null} placeholder=' ' required={req ? req : false} />
            <label className='input__label' htmlFor={'input-' + id}>
                {req ? <div className='required required_move'>✱</div> : null}
                <div className='input__text'>{label}</div>
            </label>
            {link ? <img className='input__image input__image_enabled' src={link ? 'images/' + link + '.png' : null} /> : null}
        </div >
    )
}