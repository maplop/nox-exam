import { Box, styled } from "@mui/material"
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo-img" />
    </LogoWrapper>
  )
}
export default Logo

const LogoWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    img: {
      width: 'auto',
      height: '52px',
    }
  }
}))
