import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../layaout/Layout'
import OrderPage from '../pages/OrderPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='/order' />} />
        <Route path='/order' element={<OrderPage />} />
      </Route>
    </Routes>
  )
}
export default MainRoutes