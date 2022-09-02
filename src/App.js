import AuthPage from './component/view/auth/authPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import HeadPage from './component/view/headPage/headPage';
import Home from './component/view/home/home';
import { useState } from 'react';
import Footer from './component/view/footer/footer';
import axios from 'axios';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage?.getItem('accessToken') || false)
  const [log, setLog] = useState(accessToken === false ? 'LOGIN' : 'LOGOUT')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsername = (e) => {
    setUsername(pre => pre = e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(pre => pre = e.target.value)
  }
  const btnLogin = () => {
    console.log(username)
    console.log(password)
    axios.post('https://api-qa.muangay-vn.com/api/user/login', {
      "mobilePhone": username,
      "password": password
    })
      .then(rs => {
        if (rs?.status === 201) {
          // console.log(rs)
          // alert('Ok!!')
          localStorage.setItem('accessToken', rs.data.data.token)
          setAccessToken(true)
          setLog('LOGOUT')
        }
        // else if(rs?.status===400){
        //   alert('Sai tài khoản ha')
        // }
      })
      .catch(er => {
        alert('Sai tai khoan hoac mat khau!!!')
      })
    // localStorage.setItem('accessToken', 'true')
    // console.log(accessToken)
    // setAccessToken(localStorage.getItem('accessToken'))
    // setLog('LOGOUT')
    // alert('Ok!!')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <HeadPage log={log} accessToken={accessToken} setLog={setLog} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/CustomerMenu' element={<Home />} />
          <Route path='/Login'
            element={<AuthPage
              btnLogin={btnLogin}
              handleUsername={handleUsername}
              handlePassword={handlePassword}
              accessToken={accessToken}
            />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
