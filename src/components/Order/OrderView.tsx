import { Box, styled } from "@mui/material"
import OrderListView from "./List/OrderLsitView"
import { useOrderView } from "./useOrderView"
import BtnGroup from "./common/BtnGroup"
import BadgeGroup from "./common/BadgeGroup"
import OrderPositionsView from "./Positions/OrderPositionsView"
import AssignModal from "./Assign/AssignModal"
import { Outlet, useLocation } from "react-router-dom"

const OrderView = () => {
  const { selectedButton, handleButtonClick, openModal, handleOpenModal, handleCloseModal } = useOrderView()
  const location = useLocation();
  const isDetailsPage = location.pathname.includes('details');

  return (
    <>
      {!isDetailsPage ? (
        <Box sx={{ width: '100%', height: '100%' }}>
          <Filterwrapper>
            <BadgeGroup />
            <BtnGroup selectedButton={selectedButton} handleButtonClick={handleButtonClick} />
          </Filterwrapper>
          <Box>
            {selectedButton === 0 ? <OrderListView /> : <OrderPositionsView handleOpenModal={handleOpenModal} />}
          </Box>
          {openModal && <AssignModal open={openModal} handleClose={handleCloseModal} />}
        </Box>
      ) : (
        <Outlet />
      )}
    </>
  )
}
export default OrderView

const Filterwrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  height: '60px',
  marginBottom: '20px',

  [theme.breakpoints.down('xl')]: {
    height: 'auto',
  }
}))
