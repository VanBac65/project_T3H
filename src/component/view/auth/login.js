import { Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React from 'react'
import '../../../style/login/login.css'
import BtnLogin from './btnLogin'
// import { SET_PASS_ACC, SET_USER_ACC } from './app/reducer/accountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PASS_ACC, SET_USER_ACC } from '../../../app/reducer/accountSlice'
import axios from 'axios'
import { ADD_TOKEN, CLEAR_TOKEN } from '../../../app/reducer/tokenSlice'
import { BASE_URL } from '../../../services/axiosClient'

export default function Login() {
  const dispatch = useDispatch()
  const account = useSelector(state => state.account)
  const handleUsername = (e) => {
    axios.post(`${BASE_URL}user/login`, {
      "mobilePhone": e.target.value,
      "password": account.password,
    })
      .then(rs => {
        if (rs?.status === 201) {
          localStorage.setItem('status', true)
          localStorage.setItem('accessToken', rs.data.data.token)
          const action = ADD_TOKEN(rs.data.data.token)
          dispatch(action)
        }
      })
      .catch(er => {
        localStorage.removeItem('accessToken')
        dispatch(CLEAR_TOKEN())
      })
    const action = SET_USER_ACC(e.target.value)
    dispatch(action)
  }
  const handlePassword = (e) => {
    axios.post(`${BASE_URL}user/login`, {
      "mobilePhone": account.username,
      "password": e.target.value,
    })
      .then(rs => {
        if (rs?.status === 201) {
          localStorage.setItem('status', true)
          localStorage.setItem('accessToken', rs.data.data.token)
          const action = ADD_TOKEN(rs.data.data.token)
          dispatch(action)
        }
      })
      .catch(er => {
        dispatch(CLEAR_TOKEN())   
        localStorage.removeItem('accessToken')
      })
    const action = SET_PASS_ACC(e.target.value)
    dispatch(action)
  }
  return (
    <div className='login'>
      <div className='login-head'>
        <p className='fs-3 fw-bold'>LOGIN</p>
        <img className='login-image' src='https://qa.muangay-vn.com/static/media/register.png.d5b9046c.webp' alt='' />
        <p className='fs-6 mt-3'>Login to the MuaNgay to view your orders history.<br />Don’t have an account yet? <a className='fs-6 fw-bold' href='/register'>Register here.</a></p>
      </div>
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Mobile phone number <span className='star'>*</span></p>
      <Input onChange={(e) => handleUsername(e)} />
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Password <span className='star'>*</span></p>
      <Input.Password onChange={(e) => handlePassword(e)} name='password' />
      <div className='mt-3'>
        <Checkbox>Remember me</Checkbox>
      </div>
      <BtnLogin />
    </div>
  )
}
