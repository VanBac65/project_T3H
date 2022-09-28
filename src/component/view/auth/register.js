import { Input } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ADD_ACC } from '../../../app/reducer/accountSlice'
import '../../../style/login/register.css'

export default function Register() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setComfirmPass] = useState('')
  let redirect = false
  const handleUser = (e) => {
    setUsername(e.target.value)
  }
  const handlePass = (e) => {
    setPass(e.target.value)
  }
  const handleConfirmPass = (e) => {
    setComfirmPass(e.target.value)
  }
  const btnCreate = () => {
    if (pass !== confirmPass) {
      alert('Xác nhận mật khẩu chưa đúng!!!')
    }
    else {
      dispatch(ADD_ACC({
        user: username,
        password: pass
      }))
      axios.get()
      alert('Đăng ký thành công!!!')
    }
  }
  if (pass === confirmPass) {
    redirect = true
  }
  else {
    redirect = false
  }
  return (
    <div className='login'>
      <div className='login-head'>
        <p className='fs-3 fw-bold'>REGISTER</p>
        <img src='https://qa.muangay-vn.com/static/media/register.png.d5b9046c.webp' alt='' />
      </div>
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Mobile phone number <span className='star'>*</span></p>
      <Input onChange={(e) => handleUser(e)} />
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Password<span className='star'>*</span></p>
      <Input.Password name='password' onChange={(e) => handlePass(e)} />
      <p className='mt-3 fs-6 fw-bold p-0 m-0 mt-3' >Confirm Password<span className='star'>*</span></p>
      <Input.Password name='password' onChange={(e) => handleConfirmPass(e)} />
      <div className='mt-5'>
        <Link to={redirect ? '/Login' : '/Register'}>
          <button className='btn btn-register w-100 mt-4'
            onClick={() => btnCreate()}>
            CREATE
          </button>
        </Link>
      </div>
    </div>
  )
}
