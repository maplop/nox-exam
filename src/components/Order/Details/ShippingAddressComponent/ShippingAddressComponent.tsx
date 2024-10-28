import { Box, Button, TextField, styled } from "@mui/material"
import ShippingMap from "./ShippingMap"
import SectionTitle from "../../../common/SectionTitle"

const ShippingAddressComponent = () => {
  return (
    <ShippingAddressWrapper>
      <Header>
        <SectionTitle
          title="Shipping Address"
          subtitle="  Order Shipping Address"
        />
        <AssignBtn
          variant="contained"
          disableRipple
        >
          Assign
        </AssignBtn>
      </Header>
      <MapWrapper>
        <ShippingMap />
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={2.8}
          defaultValue="Calle 5 e/ 25 y 36 Siboney Playa #4578"
          sx={{
            '.MuiOutlinedInput-root': {
              padding: '8px 12px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              color: 'rgba(0, 0, 0, 0.36)',

              '& fieldset': {
                borderColor: '#E2E8F0',
              },

              '&:hover fieldset': {
                borderColor: '#CBD5E0',
              },

              '&.Mui-focused fieldset': {
                borderColor: '#CBD5E0',
              },

            },
            '&.MuiInputBase-input': {
              height: '80px'
            },
            input: {
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
            },
          }}
        />
      </MapWrapper>
    </ShippingAddressWrapper>
  )
}
export default ShippingAddressComponent

const ShippingAddressWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '5px',
  height: '100%',
}))

const Header = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const MapWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '10px 0px',

  [theme.breakpoints.down('xl')]: {
    padding: '0px',
    gap: '36px'
  }
}))

const AssignBtn = styled(Button)(({ theme }) => ({
  height: '40px',
  padding: '0px 16px',
  borderRadius: '16px',
  textTransform: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#FFF',
  boxShadow: 'none',

  [theme.breakpoints.down('xl')]: {
    height: '32px',
    fontSize: '14px',
  }
}))
