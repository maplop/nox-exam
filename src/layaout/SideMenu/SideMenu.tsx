import { Box, styled } from "@mui/material";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu/Menu";

const SideMenu = () => {
  return (
    <SideMenuWrapper>
      <Logo />
      <Menu />
    </SideMenuWrapper>
  );
};

export default SideMenu;

const SideMenuWrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  gap: "49px",
  width: '289px',
  padding: "20px 30px",
  height: "100vh",
  overflowY: "auto",
  backgroundColor: "#FFF",
  zIndex: 1000,

  [theme.breakpoints.down('xl')]: {
    width: '250px',
    padding: "20px",
  }
}))
