import { Box, styled } from "@mui/material"
import map from '../../../../assets/map-2.png'
import RoomIcon from '@mui/icons-material/Room';

const ShippingMap = () => {
  return (
    <ShippingMapWrapper>
      <img
        src={map}
        alt="map-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }} />
      <LoactionIcon />
    </ShippingMapWrapper>
  )
}
export default ShippingMap

const ShippingMapWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '282px',

  [theme.breakpoints.down('xl')]: {
    height: '100%',
  }
}))

const LoactionIcon = styled(RoomIcon)(({ theme }) => ({
  position: 'absolute',
  top: '36%',
  left: '33%',
  transform: 'translate(-50%, -50%)',
  fontSize: '40px',
  color: '#FF7500',
  cursor: 'pointer',

  [theme.breakpoints.down('xl')]: {
    fontSize: '30px',
  }
}))
