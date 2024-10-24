/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import map from '../../../../assets/map.png'
import MarkerInformation from './MarkerInformation';
import { useState } from 'react';
import { mapData } from '../../../../data/mapData';

const MapComponent = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, dataId: number) => {
    setAnchorEl(event.currentTarget); // Guardar el elemento HTML como el anclaje del Popover
    setActiveMarker(dataId); // Guardar el ID del marcador activo
  };

  const handleMouseLeave = () => {
    setAnchorEl(null); // Limpiar el anclaje
    setActiveMarker(null); // Limpiar el marcador activo
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '526px', marginTop: '10px' }}>
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
          onMouseEnter={(e) => handleMouseEnter(e, data.id)} // Pasamos el evento y el ID del marcador
          onMouseLeave={handleMouseLeave}
        >
          <Typography sx={{
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            color: '#4A5568'
          }}>
            {data.code}
          </Typography>
          <RoomIcon
            key={data.id}
            sx={{
              fontSize: '40px',
              color: '#FF7500',
              cursor: 'pointer',
            }}
          />
          {activeMarker === data.id && (
            <MarkerInformation
              anchorEl={anchorEl}
              onClose={handleMouseLeave}
              info={data.info}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MapComponent;
