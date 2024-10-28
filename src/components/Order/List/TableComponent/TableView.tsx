import { Box, styled } from "@mui/material"
import EntriesPerPages from "./EntriesPerPages"
import Search from "./Search"
import TableComponent from "./TableComponent"

const TableView = () => {
  return (
    <TableAreaWrapper>
      <FilterWrapper>
        <EntriesPerPages />
        <Search />
      </FilterWrapper>
      <Box>
        <TableComponent />
      </Box>
    </TableAreaWrapper>
  )
}
export default TableView

const TableAreaWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '10px 0px',

  [theme.breakpoints.down('xl')]: {
    padding: '0px',
  }
}))

const FilterWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 12px'
}))
