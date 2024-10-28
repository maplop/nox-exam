import { Box, styled } from "@mui/material"
import Assignments from "./Assignments/Assignments"
import TableFilter from "./TableFilter/TableFilter"
import TableView from "./TableComponent/TableView"


const OrderListView = () => {
  return (
    <OrderListWrapper>
      <TableArea>
        <TableFilter />
        <TableView />
      </TableArea>
      <Box>
        <Assignments />
      </Box>
    </OrderListWrapper>
  )
}
export default OrderListView

const OrderListWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  height: '100%',

  [theme.breakpoints.down('xl')]: {
    gap: '30px',
  }
}))

const TableArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  height: '100%',
  padding: '30px 35px',
  borderRadius: '20px',
  background: '#FFF',
  boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)',

  [theme.breakpoints.down('xl')]: {
    padding: '24px 28px',
    height: 'fit-content'
  }
}))