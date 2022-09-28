import React, { useEffect, useState } from 'react'
import '../../../style/headPage/headPage.css'
import { Link } from 'react-router-dom'
import CategoryList from './categoryList'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOG } from '../../../app/reducer/loginSlice'
import { CLEAR_TOKEN } from '../../../app/reducer/tokenSlice'
import axios from 'axios'
import { BASE_URL } from '../../../services/axiosClient'
import { ADD_DATA_SEARCH } from '../../../app/reducer/dataSearchSlice'
import { SET_SEARCH_OR_HOME } from '../../../app/reducer/searchOrHome'

export default function HeadPage() {
    const dispatch = useDispatch()
    const setLog = useSelector(state => state.setLog)
    const token = localStorage.getItem('token')
    const [valueInput, setValueInput] = useState('')
    const btnLog = (setLog) => {
        if (token) {
            console.log(1)
            localStorage.removeItem('status')
            localStorage.removeItem('token')
            localStorage.removeItem('accessToken')
            const action = SET_LOG('LOGIN')
            dispatch(action)
            dispatch(CLEAR_TOKEN())
            setValueInput('')
        }
        else {
            setValueInput('')
        }
    }

    const setHome = () => {
        dispatch(SET_SEARCH_OR_HOME('home'))
        setValueInput('')
    }

    const handleSearch = (e) => {
        setValueInput(e.target.value)
    }
    const btnSearch = () => {
        axios.get(`${BASE_URL}consumers/menu/searchSuggestion?menuGUID=7359bfe8-dbf1-4f4d-8b70-0a10566e51ea&text=${valueInput}`)
            .then(rs => {
                dispatch(ADD_DATA_SEARCH(rs.data.data.data))
                dispatch(SET_SEARCH_OR_HOME('search'))
            })
    }
    const inputSearch = (e) => {
        if (e.key === 'Enter') {
            axios.get(`${BASE_URL}consumers/menu/searchSuggestion?menuGUID=7359bfe8-dbf1-4f4d-8b70-0a10566e51ea&text=${valueInput}`)
                .then(rs => {
                    dispatch(ADD_DATA_SEARCH(rs.data.data.data))
                    dispatch(SET_SEARCH_OR_HOME('search'))
                })
        }
    }
    const categoryList = useSelector(state => state.categoryList)
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <div className='container-head'>
            <div className='head-page'>
                <Link to='/CustomerMenu'>
                    <img className='head-img' onClick={() => setHome()} src='https://qa.muangay-vn.com/static/media/logo.c0c51f72.svg' alt='' />
                </Link>
                <Link className='fs-5 ms-5' onClick={() => { btnLog(setLog) }} to={`/${setLog === 'LOGOUT' ? 'CustomerMenu' : 'LOGIN'}`}>
                    {setLog}
                </Link>
                <div className='cart float-end me-5 mt-2 d-flex'>
                    <div className='mt-2 me-3 d-flex rounded-pill' style={{ alignItems: 'center', border: '1px solid black' }}>
                        <input
                            className='ms-1 ps-3'
                            type='text'
                            value={valueInput}
                            onKeyDown={(e) => inputSearch(e)}
                            onChange={(e) => handleSearch(e)}
                            placeholder="input search text"
                            style={{ outline: 'none', border: 'none' }} />
                        <button onClick={() => btnSearch()} className='btn'>
                            <i className="pe-1 fa-solid fa-magnifying-glass fs-4"></i>
                        </button>
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
