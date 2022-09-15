import React from 'react'
import '../../../style/headPage/headPage.css'
import { Link } from 'react-router-dom'
import Search from 'antd/lib/transfer/search'
import CategoryList from './categoryList'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOG } from '../../../app/reducer/loginSlice'

export default function HeadPage() {
    const dispatch = useDispatch()
    const setLog = useSelector(state => state.setLog)
    const btnLog = (setLog) => {
        if (setLog === 'LOGOUT') {
            console.log(setLog)
            localStorage.removeItem('status')
            localStorage.removeItem('accessToken')
            const action = SET_LOG('LOGIN')
            dispatch(action)
        }
    }
    const categoryList = useSelector(state => state.categoryList)
    return (
        <div className='container-head'>
            <div className='head-page'>
                <Link to='/CustomerMenu'>
                    <img className='head-img' src='https://qa.muangay-vn.com/static/media/logo.c0c51f72.svg' alt='' />
                </Link>
                <Link className='fs-5 ms-5' onClick={() => { btnLog(setLog) }} to={`/${setLog === 'LOGOUT' ? 'CustomerMenu' : 'LOGIN'}`}>
                    {setLog}
                </Link>
                <div className='cart float-end me-5 mt-3 d-flex'>
                    <div className='mt-2 me-3'>
                        <Search placeholder="input search text" enterButton />
                    </div>
                    <label htmlFor='nav-cart' className='btn btn-cart'>
                        <img className='img-cart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay0SfdAYA00zHxcHegaJME8l_83R5k1u4vQ&usqp=CAU' alt='' />
                        <span className='total rounded-circle border px-2'>{categoryList.length}</span>
                    </label>
                    <input type={'checkbox'} className='nav-cart' id='nav-cart' />
                    <CategoryList />
                    <label htmlFor='nav-cart' className='overlay'></label>
                </div>
            </div>

        </div>
    )
}
