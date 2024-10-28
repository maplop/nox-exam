import { Box, TextField, Divider, styled } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const DateInputGroup = () => {
  return (
    <DateInputWrapper>
      <Input
        variant="outlined"
        placeholder="1/6/2024"
      />
      <Divider orientation="vertical" flexItem sx={{ background: '#E2E8F0' }} />
      <Input
        variant="outlined"
        placeholder="7/6/2024"
      />
      <CalendarTodayOutlinedIcon />
    </DateInputWrapper>
  );
};

export default DateInputGroup;

const DateInputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #E2E8F0',
  borderRadius: '4px',
  overflow: 'hidden',
  height: '32px',
  width: '430px',

  svg: {
    width: 'auto',
    height: '14px',
    color: '#4A5568'
  },

  [theme.breakpoints.down('xl')]: {
    height: '28px',
    width: '330px',
    paddingRight: '12px',
  }
}))

const Input = styled(TextField)(() => ({
  '&.MuiTextField-root': {

    '& fieldset': {
      border: 'none'
    },

    '&:hover fieldset': {
      border: 'none'
    },

    '&.Mui-focused fieldset': {
      border: 'none'
    },
  },

  input: {
    color: '#A0AEC0',
    padding: '0px 12px',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '16.94px',
    textAlign: 'left',
  },
}))

