import { Box, Button, Popover, styled, Typography } from "@mui/material"
import { InfoProps } from "../../../../data/mapData";

interface MarkerInformationProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  info: InfoProps;
}


const MarkerInformation = ({ anchorEl, onClose, info }: MarkerInformationProps) => {

  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      disableRestoreFocus
      disableScrollLock
      sx={{
        '.MuiPopover-paper': {
          width: 248,
          borderRadius: '5px',
          border: '1px solid #CBD5E0',
          padding: '10px',
        }
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          textAlign: 'left',
          color: 'rgba(0, 0, 0, 0.36)'
        }}>
          {info.address}
        </Typography>
        <Typography sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          textAlign: 'left',
          color: '#4A5568',
          textTransform: 'uppercase',
          padding: '10px 0px',
        }}>
          {info.place}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Btn
            variant="outlined"
            size="small"
            sx={{
              border: '1px solid #FF7500',
              color: '#FF7500'
            }}
          >
            View Details
          </Btn>
          <Btn
            variant="contained"
            size="small"
            sx={{
              border: '1px solid #FF7500',
              color: '#FFF'
            }}
          >
            Assign
          </Btn>
        </Box>
      </Box>
    </Popover>
  )
}
export default MarkerInformation

const Btn = styled(Button)(() => ({
  borderRadius: '16px',
  boxShadow: 'none',
  height: '32px',
  padding: '0px 12px',
  width: '100%',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  textTransform: 'none'
}))
