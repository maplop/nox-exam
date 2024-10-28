import { Box, Button, styled } from "@mui/material"
import AssignmentsItem from "./AssignmentsItem"
import SectionTitle from "../../../common/SectionTitle"
import { assignmentsData } from "../../../../data/assignmentsData"

const Assignments = () => {
  return (
    <AssignmentsWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <SectionTitle
          title="Assignments"
          subtitle=" Assignments to messengers"
        />
        <Box>
          {assignmentsData.map((item, index) => (
            <AssignmentsItem key={index} img={item.imagePath} name={item.name} number={item.number} />
          ))}
        </Box>
      </Box>
      <Btn
        variant="contained"
        disableRipple>
        Assign All
      </Btn>
    </AssignmentsWrapper>
  )
}
export default Assignments

const AssignmentsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',
  width: '317px',
  height: '100%',
  padding: '30px 35px',
  backgroundColor: '#FFF',
  boxShadow: '0px 5px 80px 0px rgba(114, 114, 114, 0.05)',
  borderRadius: '20px',

  [theme.breakpoints.down('xl')]: {
    width: '280px',
    padding: '24px 28px',
  }
}))

const Btn = styled(Button)(({ theme }) => ({
  borderRadius: '16px',
  height: '40px',
  width: '100%',
  textTransform: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#FFF',
  boxShadow: 'none',

  [theme.breakpoints.down('xl')]: {
    height: '32px',
    fontSize: '14px',
  }
}))