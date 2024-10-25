import { Box, Typography } from "@mui/material";
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '22px',
        padding: '12px 24px',
        borderRadius: '16px',
        cursor: 'pointer',
        backgroundColor: isSelected ? '#FFF9EC' : 'transparent',
        '&:hover': {
          backgroundColor: !isSelected ? '#FFF9EC' : undefined,
        }
      }}
      onClick={() => navigate(url)}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', color: isSelected ? '#FF7500' : '#A0AEC0' }}>
        {icon}
      </Box>

      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '28px',
          color: isSelected ? '#FF7500' : '#A0AEC0',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default SimpleMenuItem;
