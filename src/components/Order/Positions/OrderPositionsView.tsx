import { Box, styled } from "@mui/material"
import TableFilter from "../List/TableFilter/TableFilter"
import Assignments from "../List/Assignments/Assignments"
import MapComponent from "./MapComponent/MapComponent"

interface OrderPositionsViewProps {
  handleOpenModal: () => void
}

const OrderPositionsView = ({ handleOpenModal }: OrderPositionsViewProps) => {
  return (
    <OrderPositionsWrapper>
      <MapWrapper>
        <TableFilter />
        <MapComponent handleOpenModal={handleOpenModal} />
      </MapWrapper>
      <Box>
        <Assignments />
      </Box>
    </OrderPositionsWrapper>
  )
}
export default OrderPositionsView

const OrderPositionsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  width: '100%',

  [theme.breakpoints.down('xl')]: {
    gap: '30px',
  }
}))

const MapWrapper = styled(Box)(({ theme }) => ({
  background: '#FFF',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '5px',
  height: '100%',
  padding: '30px 35px',
  borderRadius: '20px',
  boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)',

  [theme.breakpoints.down('xl')]: {
    padding: '24px 28px',
    height: 'fit-content'
  }
}))
