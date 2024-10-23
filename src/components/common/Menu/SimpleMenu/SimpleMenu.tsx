import { Box } from "@mui/material";
import SimpleMenuItem from "./SimpleMenuItem";
import menuData from "../../../../data/menu"; // Asegúrate de que esta ruta sea correcta
import { useState } from "react";

const SimpleMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(1);

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {menuData.map((item, index) => (
        <SimpleMenuItem
          key={index}
          icon={item.icon}
          name={item.name}
          isSelected={selectedIndex === index}
          onClick={() => handleMenuItemClick(index)}
        />
      ))}
    </Box>
  );
};

export default SimpleMenu;
