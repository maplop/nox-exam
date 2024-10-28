import { Box, styled, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SimpleMenuItemProps {
  icon: ReactNode;
  name: string;
  url: string;
}

const SimpleMenuItem: React.FC<SimpleMenuItemProps> = ({ icon, name, url }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname.includes(url);

  return (
    <MenuItemWrapper
      isSelected={isSelected}
      onClick={() => navigate(url)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', color: isSelected ? '#FF7500' : '#A0AEC0' }}>
        {icon}
      </Box>
      <Text>
        {name}
      </Text>
    </MenuItemWrapper>
  );
};

export default SimpleMenuItem;

const MenuItemWrapper = styled(Box)<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '22px',
  padding: '12px 24px',
  borderRadius: '16px',
  cursor: 'pointer',
  backgroundColor: isSelected ? '#FFF9EC' : 'transparent',
  color: isSelected ? '#FF7500' : '#A0AEC0',

  '&:hover': {
    backgroundColor: !isSelected ? '#FFF9EC' : undefined,
  },

  [theme.breakpoints.down('xl')]: {
    gap: '16px',
    padding: '8px 16px',
    borderRadius: '16px',
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '28px',

  [theme.breakpoints.down('xl')]: {
    fontSize: '13px',
    fontWeight: 600,
  }
}))
