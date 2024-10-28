import { Box, styled, useMediaQuery, useTheme } from "@mui/material"
import BreadcrumbsComponent from "../../components/common/Breadcrumb"
import SearchInput from "../../components/common/SearchInput"
import Avatar from "../../components/common/Avatar"
import RoundIcons from "../../components/common/RoundIcons"
import worldIcon from "../../assets/icons/world.png"
import settingsIcon from "../../assets/icons/settings.png"
import avatar from '/avatares/avatar.png'

const NavBar = () => {
  const theme = useTheme()
  const isDownXL = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <BreadcrumbsComponent />
      <RightSide>
        <SearchInput />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <RoundIcons icon={worldIcon} />
          <RoundIcons icon={settingsIcon} />
          <Box sx={{ padding: "0px 10px" }}>
            <Avatar img={avatar} size={isDownXL ? 32 : 40} />
          </Box>
        </Box>
      </RightSide>
    </Box>
  )
}
export default NavBar

const RightSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',

  [theme.breakpoints.down('xl')]: {
    gap: '32px'
  }
}))
