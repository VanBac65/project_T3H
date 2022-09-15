import AuthPage from './component/view/auth/authPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import HeadPage from './component/view/headPage/headPage';
import Home from './component/view/home/home';
import Footer from './component/view/footer/footer';
import Details from './component/view/home/details';

function App() {
  const details = (elm) => {
    localStorage.setItem('details', JSON.stringify(elm))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <HeadPage />
        <Routes>
          <Route path='/' element={<Home details={details} />} />
          <Route path='/CustomerMenu' element={<Home details={details} />} />
          <Route path='/details' element={<Details />} />
          <Route
            path='/Login'
            element={<AuthPage/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
