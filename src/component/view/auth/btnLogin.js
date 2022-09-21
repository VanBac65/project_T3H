import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_LOG } from '../../../app/reducer/loginSlice'
import { ADD_TOKEN } from '../../../app/reducer/tokenSlice'
import { BASE_URL, setLog } from '../../../services/axiosClient'

export default function BtnLogin({ username, password }) {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)
    const action = account.filter(el => el.user === username && el.password === password)
    console.log(action)
    const btnLogin = () => {
            axios.post(`${BASE_URL}user/login`, {
                "mobilePhone": username,
                "password": password
            })
                .then(rs => {
                    console.log(rs)
                    dispatch(SET_LOG('LOGOUT'))
                })
                .catch(rs=>{
                    alert('Sai tài khoản hoặc mật khẩu!!!')
                })
        }
    return (
        <div>
            <Link to={action.length === 0 ? '/LOGIN' : '/CustomerMenu'}>
                <button className='btn w-100 bg-secondary rounded-pill mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
