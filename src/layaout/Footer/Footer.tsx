import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', backgroundColor: '#F7FAFC' }}>
      <Typography sx={{
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '18px',
        textAlign: 'left',
        color: '#737791'
      }}>
        © 2024 VoyPati Made by <a href="https://noxcreation.dev/es" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>NOX Creation</a>
      </Typography>
    </Box >
  )
}
export default Footer