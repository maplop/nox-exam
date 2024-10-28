import { MenuItem, Box, Select, Typography, styled } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const EntriesPerPages = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <SelectInput
        labelId="entries-label"
        value={"10"}
        IconComponent={KeyboardArrowDownOutlinedIcon}
        sx={{ width: 98, height: 32 }}
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="25">25</MenuItem>
        <MenuItem value="50">50</MenuItem>
        <MenuItem value="100">100</MenuItem>
      </SelectInput>
      <Text>
        Entries per page
      </Text>
    </Box>
  );
};

export default EntriesPerPages;

const SelectInput = styled(Select)(({ theme }) => ({

  '.MuiSelect-outlined': {
    padding: 0,
    paddingLeft: 12,
    textAlign: 'left'
  },

  '&.MuiOutlinedInput-root': {
    width: 98,
    height: 32,
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
    color: '#2D3748',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    textAlign: 'left',
  },

  [theme.breakpoints.down('xl')]: {

    '&.MuiOutlinedInput-root': {
      width: 76,
      height: 30,
    },

    input: {
      fontSize: '12px',
    },
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#737791',

  [theme.breakpoints.down('xl')]: {
    fontSize: '14px',
    lineHeight: '22px',
  }
}))
