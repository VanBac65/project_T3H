import { useSelector } from 'react-redux'
import '../../../style/home/home.css'
import RenderData from './renderData'
import { setDate } from './setDate'

export default function Home({ details }) {
  const data = useSelector(state => state.data)
  const info = useSelector(state => state.info)
  // console.log(info)
  // console.log(data)
  return (
    <div className='home'>
      <div className='home-head'>
        <p className='bg-title'>{info?.outlet?.name}</p>
        <div className='head-content'>
          <div className='head-content-child'>
            <p className='fw-bold fs-5'>{info?.outlet?.name}</p>
            <p className='fw-bold fs-3'>{data?.menu?.name}</p>
            <p className='fw-bold fs-6'>{data?.menu?.description}</p>
            <p className='fs-6'>Closes at 12 PM</p>
            <p className='fs-6'>{info?.outlet?.fullAddress}</p>
          </div>
        </div>
      </div>
      <div className='container-date'>
        <div className='nav-date'>
          <nav className="navbar navbar-expand-sm navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                {
                  data?.sections?.map((elm, index) => {
                    const date = setDate(elm?.name)
                    return (
                      <li key={index} className="nav-item">
                        <a className="nav-link" href={`#${date}`}>{elm?.name}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </nav>
        </div>
        <RenderData details={details} />
      </div>
    </div>
  )
}
