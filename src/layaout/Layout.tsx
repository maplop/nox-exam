import NavBar from "./NavBar/NavBar"
import SideMenu from "./SideMenu/SideMenu"
import Footer from "./Footer/Footer"
import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <SideMenu />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height: 85,
          width: '100%',
          backgroundColor: '#FFF'
        }}>
          <NavBar />
        </Box>
        <Box sx={{ width: '100%', height: '100%', padding: '60px', background: '#F9FAFB', borderRadius: '50px 0 0 0', }}>
          <Outlet />
        </Box>
        <Box sx={{ backgroundColor: '#F7FAFC' }}>
          <Footer />
        </Box>
      </Box>
    </Box >
  )
}
export default Layout