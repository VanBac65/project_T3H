import React from 'react'
import '../../../style/home/home.css'
import RenderData from './renderData'

export default function Home({ details, setTotalCategory, setSubtotal, setRenderCategory }) {
  return (
    <div className='home'>
      <div className='home-head'>
        <p className='bg-title'>Everything Ok</p>
        <div className='head-content'>
          <div className='head-content-child'>
            <p className='fw-bold fs-5'>Everything Ok</p>
            <p className='fw-bold fs-3'>THỰC ĐƠN BỮA TRƯA</p>
            <p className='fw-bold fs-6'>Thực đơn cho Phòng</p>
            <p className='fs-6'>Closes at 12 PM</p>
            <p className='fs-6'>Abcxyz, Cổ Nhuế 2, Bắc Từ Liêm, Hà Nội</p>
          </div>
        </div>
      </div>
      <div className='container-date'>
        <div className='nav-date'>
          <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#monday">Thứ 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tuesday">Thứ 3</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#wednesday">Thứ 4</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#thursday">Thứ 5</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#friday">Thứ 6</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <RenderData
          details={details}
          setTotalCategory={setTotalCategory}
          setSubtotal={setSubtotal}
          setRenderCategory={setRenderCategory}
        />
      </div>
    </div>
  )
}
