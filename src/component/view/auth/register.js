import { Input } from 'antd'
import Checkbox from 'antd/lib/checkbox/Checkbox'
import React from 'react'
import '../../../style/login/login.css'

export default function Register() {
  return (
    <div className='login'>
      <div className='login-head'>
        <p className='fs-3 fw-bold'>REGISTER</p>
        <img src='https://qa.muangay-vn.com/static/media/register.png.d5b9046c.webp' alt='' />
        <p className='fs-6'>Login to the MuaNgay to view your orders history.<br />Don’t have an account yet? <a className='fs-6 fw-bold' href='/register'>Register here.</a></p>
      </div>
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Mobile phone number <span className='star'>*</span></p>
      <Input />
      <p className='fs-6 fw-bold p-0 m-0 mt-3'>Password <span className='star'>*</span></p>
      <Input.Password name='password' />
      <div className='mt-3'>
      <Checkbox>Remember me</Checkbox>
      </div>
      <div className='mt-3'>
      <Checkbox>Remember me</Checkbox>
      </div>
      <div>
        <button className='btn w-100 bg-secondary rounded-pill mt-4'>LOGIN</button>
      </div>
    </div>
  )
}
