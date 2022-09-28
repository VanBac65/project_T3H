import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_LOG } from '../../../app/reducer/loginSlice'
import { BASE_URL } from '../../../services/axiosClient'

export default function BtnLogin({ username, password }) {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)
    const action = account.filter(el => el.user === username && el.password === password)
    const btnLogin = () => {
            axios.post(`${BASE_URL}user/login`, {
                "mobilePhone": username,
                "password": password
            })
                .then(rs => {
                    localStorage.setItem('token',rs.data.data.token)
                    dispatch(SET_LOG('LOGOUT'))
                })
                .catch(rs=>{
                    alert('Sai tài khoản hoặc mật khẩu!!!')
                })
        }
    return (
        <div>
            <Link to={action.length === 0 ? '/LOGIN' : '/CustomerMenu'}>
                <button className='btn btn-login w-100 mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
