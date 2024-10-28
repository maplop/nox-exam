import NavBar from "./NavBar/NavBar"
import SideMenu from "./SideMenu/SideMenu"
import Footer from "./Footer/Footer"
import { Box, styled } from "@mui/material"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <SideMenu />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
        <Box sx={{ backgroundColor: '#F7FAFC' }}>
          <Footer />
        </Box>
      </Box>
    </Box >
  )
}
export default Layout

const NavBarWrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  display: 'flex',
  alignItems: 'center',
  top: 0,
  zIndex: 1000,
  minHeight: '85px',
  width: '100%',
  padding: '0px 20px',
  backgroundColor: '#FFF',

  [theme.breakpoints.down('xl')]: {
    minHeight: '52px',
    padding: '0px 16px',
  }
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '60px',
  background: '#F9FAFB',
  borderRadius: '50px 0 0 0',

  [theme.breakpoints.down('xl')]: {
    padding: '40px',
  }
}))
