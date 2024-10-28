import { Box } from "@mui/material"
import DateInputGroup from "./DateInputGroup"
import SectionTitle from "../../../common/SectionTitle"

const TableFilter = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
      <SectionTitle
        title="Orders"
        subtitle="Order Summary"
      />
      <DateInputGroup />
    </Box>
  )
}
export default TableFilter
