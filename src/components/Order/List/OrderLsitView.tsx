import { Box } from "@mui/material"
import BadgeGroup from "../common/BadgeGroup"
import BtnGroup from "../common/BtnGroup"
import Assignments from "./Assignments/Assignments"
import TableFilter from "./TableFilter/TableFilter"
import TableView from "./TableComponent/TableView"

const OrderListView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', height: '100%', }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', width: '100%', height: '60px' }}>
        <BadgeGroup />
        <BtnGroup />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', height: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, height: '100%', padding: '30px 35px', borderRadius: '20px', background: '#FFF', boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)', }}>
          <TableFilter />
          <TableView />
        </Box>
        <Box sx={{ width: '317px', height: '100%' }}>
          <Assignments />
        </Box>
      </Box>
    </Box>
  )
}
export default OrderListView
