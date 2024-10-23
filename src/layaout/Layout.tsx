import NavBar from "./NavBar/NavBar"
import SideMenu from "./SideMenu/SideMenu"
import Footer from "./Footer/Footer"
import { Stack, Box } from "@mui/material"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <Stack direction="row" sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ height: "100%" }}>
        <SideMenu />
      </Box>
      <Stack sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: "100%" }}>
        <Box sx={{ height: 85, width: '100%' }}>
          <NavBar />
        </Box>
        <Box sx={{ background: "pink", width: '100%', height: '100%' }}>
          <Outlet />
        </Box>
        <Footer />
      </Stack>
    </Stack>
  )
}
export default Layout