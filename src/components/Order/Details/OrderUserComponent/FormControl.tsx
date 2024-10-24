import { Box, OutlinedInput, styled, Typography } from "@mui/material"

interface FormControlProps {
  label: string,
  value: string
}

const FormControl = ({ label, value }: FormControlProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography sx={{
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: '#737791',
      }}>{label}</Typography>
      <Input
        type='text'
        value={value}
        fullWidth
      />
    </Box>
  )
}
export default FormControl

const Input = styled(OutlinedInput)(() => ({
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
}));
