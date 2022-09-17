import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CLEAR_ACC } from '../../../app/reducer/accountSlice'
import { SET_LOG } from '../../../app/reducer/loginSlice'
import { CLEAR_TOKEN } from '../../../app/reducer/tokenSlice'

export default function BtnLogin() {
    const dispatch = useDispatch()
    // const login = useSelector(state => state.setLog)
    const account = useSelector(state => state.account)
    const token = useSelector(state => state.token)
    const btnLogin = () => {
        axios.post('https://api-qa.muangay-vn.com/api/user/login', {
            "mobilePhone": account.username,
            "password": account.password,
        })
            .then(rs => {
                if (rs?.status === 201) {
                    localStorage.setItem('status', true)
                    localStorage.setItem('accessToken', rs.data.data.token)
                    const action = SET_LOG('LOGOUT')
                    dispatch(action)
                }
            })
            .catch(er => {
                alert('Sai tai khoan hoac mat khau!!!')
            })
        dispatch(CLEAR_ACC())
        dispatch(CLEAR_TOKEN())
    }
    console.log(token)
    return (
        <div>
            <Link to={token === null ? '/LOGIN' : '/CustomerMenu'}>
                <button className='btn w-100 bg-secondary rounded-pill mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
