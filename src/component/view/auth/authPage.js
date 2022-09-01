import React, { Fragment } from 'react'
import Login from './login'
import Register from './register'

export default function AuthPage({ btnLogin }) {
    return (
        <Fragment>
            <div>
                <Login btnLogin={btnLogin} />
            </div>
            {/* <div>
                <Register />
            </div> */}
        </Fragment>
    )
}
