import { Box } from "@mui/material"
import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb"
import SearchInput from "../../components/common/SearchInput"
import Avatar from "../../components/common/Avatar"
import RoundIcons from "../../components/common/RoundIcons"
import worldIcon from "../../assets/icons/world.png"
import settingsIcon from "../../assets/icons/settings.png"

const NavBar = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
    }}>
      <Breadcrumb />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <SearchInput />
        <RoundIcons icon={worldIcon} />
        <RoundIcons icon={settingsIcon} />
        <Box sx={{ padding: "0px 10px" }}>
          <Avatar />
        </Box>
      </Box>
    </Box>
  )
}
export default NavBar