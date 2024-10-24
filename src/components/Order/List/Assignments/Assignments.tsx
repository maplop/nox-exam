import { Box, Button, Typography } from "@mui/material"
import AssignmentsItem from "./AssignmentsItem"
import { assignmentsData } from "../../../../data/assignmentsData"

const Assignments = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
        width: '100%',
        height: '100%',
        padding: '30px 35px',
        backgroundColor: '#FFF',
        boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)',
        borderRadius: '20px',
      }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Box>
          <Typography sx={{
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '30px',
            textAlign: 'left',
            color: '#05004E'
          }}>
            Assignments
          </Typography>
          <Typography sx={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#737791'
          }}>
            Assignments to messengers
          </Typography>
        </Box>
        <Box>
          {assignmentsData.map((item, index) => (
            <AssignmentsItem key={index} img={item.imagePath} name={item.name} number={item.number} />
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        disableRipple
        sx={{
          borderRadius: '16px',
          width: '100%',
          textTransform: 'none',
          fontFamily: "'Inter', sans-serif",
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '24px',
          color: '#FFF',
          boxShadow: 'none',
        }}>Assign All</Button>
    </Box>
  )
}
export default Assignments
