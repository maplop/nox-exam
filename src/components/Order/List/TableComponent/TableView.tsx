import { Box } from "@mui/material"
import EntriesPerPages from "./EntriesPerPages"
import Search from "./Search"
import TableComponent from "./TableComponent"

const TableView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 0px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 12px' }}>
        <EntriesPerPages />
        <Search />
      </Box>
      <Box sx={{ padding: '12px' }}>
        <TableComponent />
      </Box>
    </Box>
  )
}
export default TableView