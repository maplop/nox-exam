import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, MenuItem, Select, styled } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


interface AssignModalProps {
  open: boolean,
  handleClose: () => void
}

const AssignModal = ({ open, handleClose }: AssignModalProps) => {

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock
      sx={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <ModalContent>
        <Box sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: "16px 24px",
        }}>
          <Typography sx={{
            fontFamily: "'Lato', sans-serif",
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '28px',
            textAlign: 'left',
            color: '#2D3748'
          }}>
            Assign To Messenger
          </Typography>
          <Box
            onClick={handleClose}
            sx={{ position: 'absolute', right: 16, top: 14, width: '32px', height: '32px', cursor: 'pointer' }}>
            <CloseOutlinedIcon sx={{ color: "#2D3748" }} />
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '8px 24px' }}>
            <Typography sx={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              textAlign: 'left',
              color: '#2D3748'
            }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px 0px' }}>
              <Typography sx={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                textAlign: 'left',
                color: '#737791',

                span: {
                  color: '#E53E3E'
                }
              }}>
                Messanger <span>*</span>
              </Typography>
              <Box>
                <SelectInput
                  labelId="entries-label"
                  value={"1"}
                  IconComponent={KeyboardArrowDownOutlinedIcon}
                >
                  <MenuItem value="1">Pedro Cruz Dominguez</MenuItem>
                  <MenuItem value="2">Juan Carrillo Pérez</MenuItem>
                  <MenuItem value="3">Camila Rodríguez Bolaño</MenuItem>
                  <MenuItem value="4">Ernesto Perdomo García</MenuItem>
                </SelectInput>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', padding: '16px 24px'
        }}>
          <Btn
            disableRipple
            sx={{
              backgroundColor: '#EDF2F7',
              border: '1px solid #EDF2F7',
              color: '#1A202C'
            }}
            onClick={handleClose}
          >
            Cancel
          </Btn>
          <Btn
            disableRipple
            sx={{
              backgroundColor: '#FF7500',
              border: '1px solid #FF7500',
              color: '#FFF'
            }}
          >
            Assign To
          </Btn>
        </Box>
      </ModalContent>
    </Modal>
  );
}
export default AssignModal

const ModalContent = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 448,
  backgroundColor: '#FFF',
  boxShadow: '0px 4px 120px 0px rgba(115, 115, 115, 0.08)',
  borderRadius: '6px'
}))

const SelectInput = styled(Select)(() => ({
  '.MuiSelect-outlined': {
    padding: 0,
    paddingLeft: 12,
    textAlign: 'left'
  },

  '&.MuiOutlinedInput-root': {
    width: '100%',
    height: 40,
    borderRadius: 6,
    padding: 0,

    '.MuiSelect-select': {
    },

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

  input: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'left',
    color: '#2D3748',
  },
}))

const Btn = styled(Button)(() => ({
  borderRadius: '6px',
  boxShadow: 'none',
  height: '40px',
  padding: '0px 16px',
  fontFamily: "'Lato', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  textTransform: 'none'
}))