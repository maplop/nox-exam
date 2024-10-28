import { Box, OutlinedInput, styled, Typography } from "@mui/material"

const Search = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
      <Text>Seach</Text>
      <Input type='text' />
    </Box>
  )
}
export default Search

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

const Input = styled(OutlinedInput)(({ theme }) => ({
  '&.MuiOutlinedInput-root': {
    width: 222,
    height: 32,
    borderRadius: 4,

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
    color: '#A0AEC0',
    padding: '0px 16px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '19.36px',
    textAlign: 'left',
  },

  [theme.breakpoints.down('xl')]: {
    '&.MuiOutlinedInput-root': {
      width: 200,
      height: 30,
    },

    input: {
      padding: '0px 12px',
    },
  }
}));
