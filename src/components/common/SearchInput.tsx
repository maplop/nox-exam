import { Search } from "@mui/icons-material"
import { InputAdornment, OutlinedInput, styled } from "@mui/material"

const SearchInput = () => {
  return (
    <Input
      type='text'
      placeholder="Find Client"
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon sx={{ color: '#A0AEC0' }} />
        </InputAdornment>
      }
    />
  )
}
export default SearchInput

const Input = styled(OutlinedInput)(({ theme }) => ({
  '&.MuiOutlinedInput-root': {
    width: 323,
    height: 40,
    borderRadius: 20,

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
    padding: '0px 40px 0px 16px',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '19.36px',
    textAlign: 'left',
  },

  [theme.breakpoints.down('xl')]: {
    '&.MuiOutlinedInput-root': {
      width: 250,
      height: 32,
      borderRadius: 20,
    },

    input: {
      color: '#A0AEC0',
      padding: '0px 28px 0px 16px',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'left',
    },
  },
}));

const SearchIcon = styled(Search)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    width: 'auto',
    height: 20,

  }
}))
