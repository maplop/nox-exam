/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, styled } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import map from '../../../../assets/map.png'
import MarkerInformation from './MarkerInformation';
import { useState } from 'react';
import { mapData } from '../../../../data/mapData';

interface MapComponentProps {
  handleOpenModal: () => void
}


const MapComponent = ({ handleOpenModal }: MapComponentProps) => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, dataId: number) => {
    setAnchorEl(event.currentTarget);
    setActiveMarker(dataId);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setActiveMarker(null);
  };

  return (
    <MapComponentWrapper>
      <img
        src={map}
        alt="map-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {mapData.map((data) => (
        <Box sx={{
          position: 'absolute',
          top: `${data.y}%`,
          left: `${data.x}%`,
          transform: 'translate(-50%, -50%)',
        }}
          onMouseEnter={(e) => handleMouseEnter(e, data.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Text>
            {data.code}
          </Text>
          <LocationIcon key={data.id} />
          {activeMarker === data.id && (
            <MarkerInformation
              anchorEl={anchorEl}
              onClose={handleMouseLeave}
              info={data.info}
              handleOpenModal={handleOpenModal}
            />
          )}
        </Box>
      ))}
    </MapComponentWrapper>
  );
};

export default MapComponent;

const MapComponentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '526px',
  marginTop: '10px',

  [theme.breakpoints.down('xl')]: {
    minHeight: 'auto',
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#4A5568',

  [theme.breakpoints.down('xl')]: {
    fontSize: '12px',
    fontWeight: 500,
  }
}))

const LocationIcon = styled(RoomIcon)(({ theme }) => ({
  fontSize: '40px',
  color: '#FF7500',
  cursor: 'pointer',

  [theme.breakpoints.down('xl')]: {
    fontSize: '28px',
  }
}))
