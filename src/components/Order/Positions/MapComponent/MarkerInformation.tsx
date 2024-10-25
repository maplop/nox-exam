import { Box, Button, Popover, styled, Typography } from "@mui/material"
import { InfoProps } from "../../../../data/mapData";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routes";

interface MarkerInformationProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  info: InfoProps;
  handleOpenModal: () => void
}

const MarkerInformation = ({ anchorEl, onClose, info, handleOpenModal }: MarkerInformationProps) => {

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

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
          boxShadow: 'none',
          position: 'relative',
          overflow: 'visible',
          background: '#FFF',
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -9,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0px',
          height: '0px',
          borderLeft: '9px solid transparent',
          borderRight: '9px solid transparent',
          borderBottom: '9px solid white',
        }}
      />
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
            disableRipple
            sx={{
              border: '1px solid #FF7500',
              color: '#FF7500'
            }}
            onClick={() => navigate(ROUTES.ORDERS.DETAILS)}
          >
            View Details
          </Btn>
          <Btn
            variant="contained"
            size="small"
            disableRipple
            sx={{
              border: '1px solid #FF7500',
              color: '#FFF'
            }}
            onClick={handleOpenModal}
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
