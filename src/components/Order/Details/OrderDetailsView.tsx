import { Box, styled } from "@mui/material"
import Grid from '@mui/material/Grid2';
import OrderUserComponent from "./OrderUserComponent/OrderUserComponent"
import ShippingAddressComponent from "./ShippingAddressComponent/ShippingAddressComponent"
import ProductsComponent from "./ProductsComponent/ProductsComponent"
import StatusComponent from "./StatusComponent/StatusComponent"

const OrderDetailsView = () => {
  return (
    <OrderDetailsWrapper>
      <Grid container spacing={{ lg: 4, xl: 5 }}>
        <Grid size={8} >
          <Wrapper>
            <OrderUserComponent />
          </Wrapper>
        </Grid>
        <Grid size={4}>
          <Wrapper>
            <ShippingAddressComponent />
          </Wrapper>
        </Grid>
      </Grid>
      <Grid container spacing={{ lg: 4, xl: 5 }}>
        <Grid size={6}>
          <Wrapper>
            <ProductsComponent />
          </Wrapper>
        </Grid>
        <Grid size={6}>
          <Wrapper>
            <StatusComponent />
          </Wrapper>
        </Grid>
      </Grid>
    </OrderDetailsWrapper >
  )
}
export default OrderDetailsView

const OrderDetailsWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  height: '100%',
}))

const Wrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  padding: '30px 35px',
  backgroundColor: '#FFF',
  boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)',

  [theme.breakpoints.down('xl')]: {
    padding: '24px 28px',
  }
}))

