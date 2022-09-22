import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import '../../../style/login/login.css'
import BtnLogin from './btnLogin'
import { Link } from 'react-router-dom'

export default function Login() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className='login'>
      <div className='login-head'>
        <p className='fs-3 fw-bold'>LOGIN</p>
        <img className='login-image' src='https://qa.muangay-vn.com/static/media/register.png.d5b9046c.webp' alt='' />
        <p className='fs-6 mt-3'>Login to the MuaNgay to view your orders history.<br />Don’t have an account yet?
          <Link className='fs-6 fw-bold' to='/Register'> Register here.</Link></p>
      </div>
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Mobile phone number <span className='star'>*</span></p>
      <Input onChange={(e) => handleUsername(e)} />
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Password <span className='star'>*</span></p>
      <Input.Password className='mb-5' onChange={(e) => handlePassword(e)} name='password' />
      <BtnLogin username={username} password={password} />
    </div>
  )
}
