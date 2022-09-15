import React, { Fragment } from 'react'
import Login from './login'
import Register from './register'

export default function AuthPage({ btnLogin, handleUsername, handlePassword, accessToken }) {
    return (
        <Fragment>
            <div>
                <Login
                    btnLogin={btnLogin}
                    handleUsername={handleUsername}
                    handlePassword={handlePassword}
                    accessToken={accessToken}
                />
            </div>
            {/* <div>
                <Register />
            </div> */}
        </Fragment>
    )
}
