import { Box, Stack, styled } from "@mui/material"
import OrderUserComponent from "./OrderUserComponent/OrderUserComponent"
import ShippingAddressComponent from "./ShippingAddressComponent/ShippingAddressComponent"
import ProductsComponent from "./ProductsComponent/ProductsComponent"
import StatusComponent from "./StatusComponent/StatusComponent"

const OrderDetailsView = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
      <Stack direction={"row"} gap={"40px"}>
        <Wrapper>
          <OrderUserComponent />
        </Wrapper>
        <Box bgcolor={"#FFF"} sx={{
          minWidth: '498px', borderRadius: '20px',
          padding: '30px 35px'
        }}>
          <ShippingAddressComponent />
        </Box>
      </Stack>
      <Stack direction={"row"} gap={"40px"}>
        <Wrapper>
          <ProductsComponent />
        </Wrapper>
        <Wrapper>
          <StatusComponent />
        </Wrapper>
      </Stack>
    </Box>
  )
}
export default OrderDetailsView

const Wrapper = styled(Box)(() => ({
  width: '100%',
  borderRadius: '20px',
  padding: '30px 35px',
  backgroundColor: '#FFF',
}))

