import { Navigate, Route, Routes } from 'react-router-dom'
import ROUTES from './routes'
import Layout from '../layaout/Layout'
import DashboardPage from '../pages/DashboardPage'
import OrderPage from '../pages/Order/OrderPage'
import OrderDetailsPage from '../pages/Order/OrderDetailsPage'
import BannersPage from '../pages/BannersPage'
import PublicInfoPage from '../pages/PublicInfoPage'
import NotificationsPage from '../pages/NotificationsPage'
import RouletteGamePage from '../pages/RouletteGamePage'
import InventoriesPage from '../pages/InventoriesPage'
import CouponsPage from '../pages/CouponsPages'
import ShippingsPage from '../pages/ShippingsPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={ROUTES.DASHBOARD} />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        <Route path={ROUTES.ORDERS.BASE} element={<OrderPage />} />
        <Route path={ROUTES.ORDERS.DETAILS} element={<OrderDetailsPage />} />
        <Route path={ROUTES.BANNERS} element={<BannersPage />} />
        <Route path={ROUTES.PUBLIC_INFO} element={<PublicInfoPage />} />
        <Route path={ROUTES.NOTIFICATIONS} element={<NotificationsPage />} />
        <Route path={ROUTES.ROULETTE_GAME} element={<RouletteGamePage />} />
        <Route path={ROUTES.INVENTORIES} element={<InventoriesPage />} />
        <Route path={ROUTES.COUPONS} element={<CouponsPage />} />
        <Route path={ROUTES.SHIPPINGS} element={<ShippingsPage />} />
      </Route>
    </Routes>
  )
}
export default MainRoutes