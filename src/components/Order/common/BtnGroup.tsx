import { useState } from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import locationIcon from '../../../assets/icons/location.png'

const BtnGroup = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <Box sx={{ padding: '10px' }}>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
      >
        <Button
          disableRipple
          onClick={() => handleButtonClick(0)}
          sx={{
            backgroundColor: selectedButton === 0 ? '#EDF2F7' : 'transparent',
            borderColor: '#EDF2F7',
            borderRadius: '16px',
            width: '48px',
            height: '40px',
            '&:hover': {
              backgroundColor: selectedButton === 0 ? '#EDF2F7' : 'transparent',
            },
          }}
        >
          <MenuOutlinedIcon sx={{ color: '#000000' }} />
        </Button>
        <Button
          disableRipple
          onClick={() => handleButtonClick(1)}
          sx={{
            backgroundColor: selectedButton === 1 ? '#EDF2F7' : 'transparent',
            borderColor: '#EDF2F7',
            borderRadius: '16px',
            width: '48px',
            height: '40px',
            '&:hover': {
              backgroundColor: selectedButton === 1 ? '#EDF2F7' : 'transparent',
            },
          }}
        >
          <img src={locationIcon} alt='icon' />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default BtnGroup;
