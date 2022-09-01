import AuthPage from './component/view/auth/authPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.css'
import HeadPage from './component/view/headPage/headPage';
import Home from './component/view/home/home';
import { useState } from 'react';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage?.getItem('accessToken'))
  const [log, setLog] = useState(accessToken ? 'LOGOUT' : 'LOGIN')
  console.log(accessToken)
  const btnLogin = () =>{
    localStorage.setItem('accessToken','true')
    console.log(accessToken)
    setAccessToken(localStorage.getItem('accessToken'))
    setLog('LOGOUT')
    // alert('Ok!!')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <HeadPage log={log} setAccessToken={setAccessToken} setLog={setLog}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/CustomerMenu' element={<Home />} />
            <Route path='/Login' element={<AuthPage btnLogin={btnLogin}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
