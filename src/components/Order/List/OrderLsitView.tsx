import { Box } from "@mui/material"
import BadgeGroup from "../common/BadgeGroup"
import BtnGroup from "../common/BtnGroup"

const OrderListView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', height: '100%', }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', width: '100%', height: '60px' }}>
        <BadgeGroup />
        <BtnGroup />
      </Box>
      <Box sx={{ width: '100%', height: '100%', background: 'yellow' }}></Box>
    </Box>
  )
}
export default OrderListView
