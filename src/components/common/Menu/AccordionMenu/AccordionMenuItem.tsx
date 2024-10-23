import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionMenuProps {
  title: string;
  items: string[];
}

interface AccordionMenuItemProps {
  item: AccordionMenuProps;
}


const AccordionMenuItem = ({ item }: AccordionMenuItemProps) => {
  return (
    <Accordion disableGutters
      sx={{
        boxShadow: "none",
        borderRadius: '16px',
        cursor: 'pointer',
        '&:before': {
          display: 'none',
        }
      }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper': {
            marginRight: '22px',
            transform: 'rotate(270deg)',
            color: '#A0AEC0',
          },
        }}
      >
        <Typography sx={{
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '28px',
          textAlign: 'left',
          color: '#A0AEC0',
        }}>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '28px',
        textAlign: 'left',
        color: '#A0AEC0',
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {item.items.map((item, index) => (
            <MenuItem key={index} sx={{
              borderRadius: '16px',
              ':hover': {
                backgroundColor: '#FFF9EC'
              }
            }}>
              <Typography sx={{
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '28px',
                textAlign: 'left',
                color: '#A0AEC0',
              }}>
                {item}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionMenuItem;
