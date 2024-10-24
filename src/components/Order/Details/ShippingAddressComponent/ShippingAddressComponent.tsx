import { Box, Button, TextField, Typography } from "@mui/material"
import ShippingMap from "./ShippingMap"

const ShippingAddressComponent = () => {
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
            Shipping Address
          </Typography>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#737791'
          }}>
            Order Shipping Address
          </Typography>
        </Box>
        <Button
          variant="contained"
          disableRipple
          sx={{
            height: '40px',
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
          Assign
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 0px' }}>
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
              color: 'red',
              padding: '8px 12px',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
            },
          }}
        />
      </Box>
    </Box>
  )
}
export default ShippingAddressComponent
