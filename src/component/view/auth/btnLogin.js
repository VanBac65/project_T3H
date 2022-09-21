import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_LOG } from '../../../app/reducer/loginSlice'
import { ADD_TOKEN } from '../../../app/reducer/tokenSlice'

export default function BtnLogin({ username, password }) {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)
    const action = account.filter(el => el.user === username && el.password === password)
    const btnLogin = () => {
        if (action.length > 0) {
            dispatch(SET_LOG('LOGOUT'))
            dispatch(ADD_TOKEN([1]))
        }
        else {
            alert('Sai tài khoản hoặc mật khẩu!!!')
        }
    }
    return (
        <div>
            <Link to={action.length === 0 ? '/LOGIN' : '/CustomerMenu'}>
                <button className='btn w-100 bg-secondary rounded-pill mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
