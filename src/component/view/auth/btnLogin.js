import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnLogin({ btnLogin, accessToken }) {
    console.log(accessToken)
    return (
        <div>
            <Link to={accessToken === false ? '/LOGIN' : '/CustomerMenu'}>
                <button className='btn w-100 bg-secondary rounded-pill mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
