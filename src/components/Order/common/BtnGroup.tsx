import { Box, Button, ButtonGroup, styled } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import locationIcon from '../../../assets/icons/location.png'

interface BtnGroupProps {
  selectedButton: number,
  handleButtonClick: (index: number) => void
}

const BtnGroup = ({ selectedButton, handleButtonClick }: BtnGroupProps) => {

  return (
    <BtnGroupWrapper>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
      >
        <Btn
          disableRipple
          isSelectedButton={selectedButton === 0}
          onClick={() => handleButtonClick(0)}
        >
          <MenuOutlinedIcon sx={{ color: '#000000' }} />
        </Btn>
        <Btn
          disableRipple
          isSelectedButton={selectedButton === 1}
          onClick={() => handleButtonClick(1)}
        >
          <img src={locationIcon} alt='icon' />
        </Btn>
      </ButtonGroup>
    </BtnGroupWrapper>
  );
};

export default BtnGroup;

const BtnGroupWrapper = styled(Box)(({ theme }) => ({
  padding: '10px',

  [theme.breakpoints.down('xl')]: {
    padding: '0px',
  }
}))

const Btn = styled(Button)<{ isSelectedButton: boolean }>(({ theme, isSelectedButton }) => ({
  backgroundColor: isSelectedButton ? '#EDF2F7' : '#FFF',
  borderColor: '#EDF2F7',
  borderRadius: '16px',
  width: '48px',
  height: '40px',
  '&:hover': {
    backgroundColor: isSelectedButton ? '#EDF2F7' : '#FFF',
  },

  [theme.breakpoints.down('xl')]: {
    width: '38px',
    height: '32px',

    svg: {
      width: '18px',
      height: 'auto'
    }
  }
}))

