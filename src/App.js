import AuthPage from './component/view/auth/authPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import HeadPage from './component/view/headPage/headPage';
import Home from './component/view/home/home';
import Footer from './component/view/footer/footer';
import Details from './component/view/home/details';
import { GET_DATA } from './app/reducer/dataSlice';
import { useDispatch } from 'react-redux';
import { BASE_URL, BODY } from './services/axiosClient';
import axios from 'axios';
import { useEffect } from 'react';
import { GET_INFO } from './app/reducer/infoSlice';
import Register from './component/view/auth/register';
import { SET_SEARCH_OR_HOME } from './app/reducer/searchOrHome';

function App() {
  const details = (elm) => {
    dispatch(SET_SEARCH_OR_HOME('home'))
    localStorage.setItem('details', JSON.stringify(elm))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    axios.post(`${BASE_URL}consumers/menu/data`, BODY)
      .then(rs => {
        const action = GET_DATA(rs.data.data)
        dispatch(action)
      })
    axios.post(`${BASE_URL}consumers/outlet/getInfo`, BODY)
      .then(rs => {
        const action = GET_INFO(rs.data.data)
        dispatch(action)
      })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <HeadPage />
        <Routes>
          <Route path='/' element={<Home details={details} />} />
          <Route path='/CustomerMenu' element={<Home details={details} />} />
          <Route path='/details' element={<Details details={details}/>} />
          <Route
            path='/Login'
            element={<AuthPage />} />
          <Route
            path='/Register'
            element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
