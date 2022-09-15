import React, { Fragment } from 'react'
import Login from './login'
// import Register from './register'

export default function AuthPage() {
    return (
        <Fragment>
            <div>
                <Login/>
            </div>
            {/* <div>
                <Register />
            </div> */}
        </Fragment>
    )
}
