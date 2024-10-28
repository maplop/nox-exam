import { Box, styled } from "@mui/material"

interface RoundIconsProps {
  icon: string
}

const RoundIcons = ({ icon }: RoundIconsProps) => {
  return (
    <IconWrapper>
      <img src={icon} alt="icon" />
    </IconWrapper>
  )
}
export default RoundIcons

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 45,
  height: 45,
  borderRadius: '100%',
  overflow: 'hidden',
  backgroundColor: '#EDF2F7',
  cursor: 'pointer',

  [theme.breakpoints.down('xl')]: {
    width: 32,
    height: 32,

    img: {
      width: 18,
      height: 18
    }
  }
}))
