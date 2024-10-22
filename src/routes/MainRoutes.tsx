import { Route, Routes } from 'react-router-dom'
import Layout from '../layaout/Layout'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
  )
}
export default MainRoutes