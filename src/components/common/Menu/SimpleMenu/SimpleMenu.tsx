import { Box } from "@mui/material";
import SimpleMenuItem from "./SimpleMenuItem";
import menuData from "../../../../data/menu";

const SimpleMenu = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {menuData.map((item, index) => (
        <SimpleMenuItem
          key={index}
          icon={item.icon}
          name={item.name}
          url={item.url}
        />
      ))}
    </Box>
  );
};

export default SimpleMenu;
