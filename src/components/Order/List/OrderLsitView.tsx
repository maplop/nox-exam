import { Box } from "@mui/material"
import BadgeGroup from "../common/BadgeGroup"
import BtnGroup from "../common/BtnGroup"
import Assignments from "./Assignments/Assignments"

const OrderListView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', height: '100%', }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', width: '100%', height: '60px' }}>
        <BadgeGroup />
        <BtnGroup />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', flex: 1, height: '100%', background: 'green' }}>

        </Box>
        <Box sx={{ width: '317px', height: '100%' }}>
          <Assignments />
        </Box>
      </Box>
    </Box>
  )
}
export default OrderListView
