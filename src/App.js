import AuthPage from './component/view/auth/authPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import HeadPage from './component/view/headPage/headPage';
import Home from './component/view/home/home';
import { useState } from 'react';
import Footer from './component/view/footer/footer';
import axios from 'axios';
import Details from './component/view/home/details';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage?.getItem('accessToken') || false)
  const [log, setLog] = useState(accessToken === false ? 'LOGIN' : 'LOGOUT')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [detail, setDetail] = useState({})
  const [totalCategory, setTotalCategory] = useState(localStorage.getItem('categoryList') === null ? '0' : JSON.parse(localStorage.getItem('categoryList')).length)
  const [subtotal, setSubtotal] = useState(
    JSON.parse(localStorage.getItem('categoryList')) ? JSON.parse(localStorage.getItem('categoryList')).reduce((pre, cur) => {
      pre += cur.total
      return pre
    }, 0) : 0
  )
  const [renderCategory, setRenderCategory] = useState(JSON.parse(localStorage.getItem('categoryList')) || [])
  const handleUsername = (e) => {
    setUsername(pre => pre = e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(pre => pre = e.target.value)
  }
  const details = (elm) => {
    localStorage.setItem('details', JSON.stringify(elm))
  }

  const btnLogin = () => {
    axios.post('https://api-qa.muangay-vn.com/api/user/login', {
      "mobilePhone": username,
      "password": password,
    })
      .then(rs => {
        if (rs?.status === 201) {
          localStorage.setItem('status', true)
          localStorage.setItem('accessToken', rs.data.data.token)
          setAccessToken(true)
          setLog('LOGOUT')
        }
      })
      .catch(er => {
        alert('Sai tai khoan hoac mat khau!!!')
      })
  }
  return (
    <div className="App">
      <BrowserRouter>
        <HeadPage
          log={log}
          setLog={setLog}
          totalCategory={totalCategory}
          setTotalCategory={setTotalCategory}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
          renderCategory={renderCategory}
          setRenderCategory={setRenderCategory}
        />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                details={details}
                setTotalCategory={setTotalCategory}
                setSubtotal={setSubtotal}
                setRenderCategory={setRenderCategory}
              />}
          />
          <Route
            path='/CustomerMenu'
            element={
              <Home
                details={details}
                setTotalCategory={setTotalCategory}
                setSubtotal={setSubtotal}
                setRenderCategory={setRenderCategory}
              />}
          />
          <Route
            path='/details'
            element={
              <Details
                setTotalCategory={setTotalCategory}
                setSubtotal={setSubtotal}
                setRenderCategory={setRenderCategory}
              />}
          />
          <Route
            path='/Login'
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
