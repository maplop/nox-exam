import { Box, Button, Typography } from "@mui/material"
import StatusTable from "./StatusTable"

const StatusComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <Box>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '30px',
            textAlign: 'left',
            color: '#05004E'
          }}>
            Status
          </Typography>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#737791'
          }}>
            Status Orders
          </Typography>
        </Box>
        <Button
          variant="contained"
          disableRipple
          sx={{
            height: '34px',
            padding: '0px 16px',
            borderRadius: '16px',
            textTransform: 'none',
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            color: '#FFF',
            boxShadow: 'none'
          }}
        >
          Change Status
        </Button>
      </Box>
      <Box sx={{ padding: '10px 0px', overflowY: 'auto' }}>
        <StatusTable />
      </Box>
    </Box>
  )
}
export default StatusComponent
