import { Box, Divider } from "@mui/material"
import AccordionMenu from "./AccordionMenu/AccordionMenu"
import SimpleMenu from "./SimpleMenu/SimpleMenu"


const Menu = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', height: 'calc(100vh - 160px)' }}>
      <SimpleMenu />
      <Divider sx={{ color: '#EDF2F7', height: '2px' }} />
      <AccordionMenu />
    </Box>
  )
}
export default Menu