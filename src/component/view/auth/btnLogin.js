import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnLogin({ btnLogin }) {
    // let history = useHistory()
    return (
        <div>
            <Link to='/CustomerMenu'>
                <button className='btn w-100 bg-secondary rounded-pill mt-4' onClick={() => btnLogin()}>LOGIN</button>
            </Link>
        </div>
    )
}
