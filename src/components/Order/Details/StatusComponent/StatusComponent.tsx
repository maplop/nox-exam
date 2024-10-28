import { Box, Button } from "@mui/material"
import StatusTable from "./StatusTable"
import SectionTitle from "../../../common/SectionTitle"

const StatusComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <SectionTitle
          title="Status"
          subtitle="            Status Orders"
        />
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
