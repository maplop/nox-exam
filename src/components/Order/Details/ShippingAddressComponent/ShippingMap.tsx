import { Box } from "@mui/material"
import map from '../../../../assets/map-2.png'
import RoomIcon from '@mui/icons-material/Room';

const ShippingMap = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '282px' }}>
      <img
        src={map}
        alt="map-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }} />

      <RoomIcon
        sx={{
          position: 'absolute',
          top: '36%',
          left: '33%',
          transform: 'translate(-50%, -50%)',
          fontSize: '40px',
          color: '#FF7500',
          cursor: 'pointer',
        }}
      />
    </Box>
  )
}
export default ShippingMap
