import { Box, OutlinedInput, styled, Typography } from "@mui/material"

interface FormControlProps {
  label: string,
  value: string
}

const FormControl = ({ label, value }: FormControlProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        type='text'
        value={value}
        fullWidth
      />
    </Wrapper>
  )
}
export default FormControl

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  [theme.breakpoints.down('xl')]: {
    gap: '4px',
  }

}))

const Label = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#737791',

  [theme.breakpoints.down('xl')]: {
    fontSize: 14,
  }
}))

const Input = styled(OutlinedInput)(({ theme }) => ({
  '&.MuiOutlinedInput-root': {
    height: 40,
    borderRadius: '4px',

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
    padding: '0px 16px',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '19.36px',
    textAlign: 'left',
  },


  [theme.breakpoints.down('xl')]: {
    '&.MuiOutlinedInput-root': {
      height: 32,
      borderRadius: '4px',
    },

    input: {
      fontSize: 14,
    },
  }
}));
