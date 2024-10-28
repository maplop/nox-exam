import { Box, styled, Typography } from "@mui/material"
import AccordionMenuItem from "./AccordionMenuItem";

const AccordionMenu = () => {
  const items = ["Items 1", "Items 2", "Items 3"];

  const menuItems = [
    {
      title: "Clients",
      items: items,
    },
    {
      title: "Users",
      items: items,
    },
    {
      title: "Categories",
      items: items,
    },
  ];

  return (
    <Box>
      <MenuTitle>
        Nomenclators
      </MenuTitle>
      {menuItems.map((menuItem, index) => (
        <AccordionMenuItem key={index} item={menuItem} />
      ))}
    </Box>
  )
}
export default AccordionMenu

const MenuTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '24px',
  color: '#737791',
  textAlign: 'left',

  [theme.breakpoints.down('xl')]: {
    fontSize: '14px',
    fontWeight: 600,
  }
}))
