import { Box, Typography } from "@mui/material"
import DateInputGroup from "./DateInputGroup"

const TableFilter = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
      <Box>
        <Typography sx={{
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '30px',
          textAlign: 'left',
          color: '#05004E'
        }}>Orders</Typography>
        <Typography sx={{
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left',
          color: '#737791'
        }}
        >Order Summary</Typography>
      </Box>
      <Box sx={{ padding: '10px' }}>
        <DateInputGroup />
      </Box>
    </Box>
  )
}
export default TableFilter
