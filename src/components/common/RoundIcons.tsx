import { Box } from "@mui/material"

interface RoundIconsProps {
  icon: string
}

const RoundIcons = ({ icon }: RoundIconsProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 45, height: 45, borderRadius: '100%', overflow: 'hidden', backgroundColor: '#EDF2F7' }}>
      <img src={icon} alt="icon" />
    </Box>
  )
}
export default RoundIcons