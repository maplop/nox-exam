import { Box } from "@mui/material"
import OrderListView from "./List/OrderLsitView"
import { useOrderView } from "./useOrderView"
import BtnGroup from "./common/BtnGroup"
import BadgeGroup from "./common/BadgeGroup"
import OrderPositionsView from "./Positions/OrderPositionsView"
import AssignModal from "./Assign/AssignModal"
import OrderDetailsView from "./Details/OrderDetailsView"

const OrderView = () => {
  const { selectedButton, handleButtonClick, openModal, handleOpenModal, handleCloseModal, showDetailsView, setShowDetailsView } = useOrderView()
  return (
    <Box sx={{ width: '100%', height: '100%', }}>
      {showDetailsView ? <OrderDetailsView /> : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', width: '100%', height: '60px', marginBottom: '20px' }}>
            <BadgeGroup />
            <BtnGroup selectedButton={selectedButton} handleButtonClick={handleButtonClick} />
          </Box>
          <Box sx={{ height: '100%', maxHeight: '651px' }}>
            {selectedButton === 0 ? <OrderListView /> : <OrderPositionsView handleOpenModal={handleOpenModal} handleShowDetails={() => setShowDetailsView(true)} />}
          </Box>
          {openModal && <AssignModal open={openModal} handleClose={handleCloseModal} />}
        </>
      )}
    </Box>
  )
}
export default OrderView
