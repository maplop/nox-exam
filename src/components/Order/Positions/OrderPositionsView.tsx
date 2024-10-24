import { Box } from "@mui/material"
import TableFilter from "../List/TableFilter/TableFilter"
import Assignments from "../List/Assignments/Assignments"
import MapComponent from "./MapComponent/MapComponent"

const OrderPositionsView = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', width: '100%', height: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1, height: '100%', padding: '30px 35px', borderRadius: '20px', background: '#FFF', boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)', }}>
        <TableFilter />
        <MapComponent />
      </Box>
      <Box sx={{ width: '317px', height: '100%' }}>
        <Assignments />
      </Box>
    </Box>
  )
}
export default OrderPositionsView
