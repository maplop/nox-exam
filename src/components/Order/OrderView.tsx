import { Box } from "@mui/material"
import OrderListView from "./List/OrderLsitView"
import { useOrderView } from "./useOrderView"
import BtnGroup from "./common/BtnGroup"
import BadgeGroup from "./common/BadgeGroup"
import OrderPositionsView from "./Positions/OrderPositionsView"

const OrderView = () => {
  const { selectedButton, handleButtonClick } = useOrderView()
  return (
    <Box sx={{ width: '100%', height: '100%', }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', width: '100%', height: '60px', marginBottom: '20px' }}>
        <BadgeGroup />
        <BtnGroup selectedButton={selectedButton} handleButtonClick={handleButtonClick} />
      </Box>
      <Box sx={{ height: '100%', maxHeight: '651px' }}>
        {selectedButton === 0 ? <OrderListView /> : <OrderPositionsView />}
      </Box>

    </Box>
  )
}
export default OrderView
