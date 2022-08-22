import React, { useEffect, useState } from 'react'
import Input from './Input'
import '../style/Form.css'
import '../style/Input.css'


export default function ModalForm({ active, setActive }) {
    const [image, setImage] = useState()
    function closeForm(e) {
        setActive(false)
    }

    function fileChoose() {
        document.getElementById('avatar_file').click()
    }


    function imageChange(files) {
        const [file] = files
        setImage(URL.createObjectURL(file))
        // document.getElementById('avatar-image').src = image
    }

    function imageDelete() {
        setImage(null)
    }

    return (

        <div className={active ? 'main active' : 'main'} onClick={e => closeForm(e)}>
            <form className='form' method='post' onClick={e => e.stopPropagation()}>
                <p className='form__text'>
                    Стать партнёром проекта
                </p>
                <div className='flex-part'>
                    <div className='flex-part__column'>
                        <Input id='name' label='Название организации' req={true} move={true} isShort={true} />
                        <Input id='phone' label='Телефон' req={true} move={true} isShort={true} type='tel' />
                        <Input id='email' label='E-mail' req={true} move={true} isShort={true} type='email' />
                    </div>
                    <div className='flex-part__column-avatar'>
                        <div className='avatar'>

                            <div className='avatar__header'>
                                <div className='required required_position' >✱</div>
                                <p className='avatar__text'>Логотип (jpeg, png)</p>
                            </div>
                            <div className='avatar__sandwich'>
                                <div className='avatar__prewiew'>
                                    <img id='avatar-image' className='avatar__image' src={image?image:'/images/prewiew.png'} />
                                </div>
                                <div className='avatar__delete' onClick={() => imageDelete()}>
                                </div>
                                <div className='avatar__choose' onClick={() => fileChoose()}>
                                    <img  src={'/images/choose-file.png'} />
                                    Выберите файл
                                    <input type='file' id='avatar_file' className='avatar__input' accept='.png, .jpg, .jpeg' onChange={e => imageChange(e.target.files)} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Input id='direction' label='Направление' req={true} move={true} />
                <Input id='web' label='Ваш веб-сайт' link='web' />
                <Input id='vk' label='Ваша страница VK' link='vk' />
                <Input id='ok' label='Ваша страница Одноклассники' link='ok' />
                <Input id='fb' label='Ваша страница Facebook' link='fb' />
                <Input id='ig' label='Ваша страница Instagram' link='ig' />
                <Input id='yt' label='Ваш YouTube-канал' link='yt' />
                <Input id='director' label='Руководитель' move={true} />
                <button className='button' type='submit'>
                    Стать партнёром проекта
                </button>
                <div className='button-cancel' onClick={() => setActive(false)}>
                    Отмена
                </div>
            </form>
        </div>

    )
}