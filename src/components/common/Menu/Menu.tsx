import { Box, Divider, styled } from "@mui/material"
import AccordionMenu from "./AccordionMenu/AccordionMenu"
import SimpleMenu from "./SimpleMenu/SimpleMenu"


const Menu = () => {
  return (
    <MenuWrapper>
      <SimpleMenu />
      <Divider sx={{ color: '#EDF2F7', height: '2px' }} />
      <AccordionMenu />
    </MenuWrapper>
  )
}
export default Menu

const MenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  overflowY: 'auto',
  height: 'calc(100vh - 160px)',

  [theme.breakpoints.down('xl')]: {
    gap: '16px',
  }
}))
