import { Box } from "@mui/material"
import Logo from "../../components/common/Logo"
import Menu from "../../components/common/Menu/Menu"

const SideMenu = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '49px', width: 289, height: '100%', padding: '20px 30px' }}>
      <Logo />
      <Menu />
    </Box>
  )
}
export default SideMenu