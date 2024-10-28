import { Box, styled, Typography } from "@mui/material"
import Avatar from "../../../common/Avatar"

interface AssignmentsItemProps {
  img: string,
  name: string,
  number: number
}

const AssignmentsItem = ({ img, name, number }: AssignmentsItemProps) => {

  return (
    <AssignmentsItemWrapper>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar img={img} size={24} />
        <Text>
          {name}
        </Text>
      </Box>
      <NumberTextWrapper>
        <NumberText>
          {number}
        </NumberText>
      </NumberTextWrapper>
    </AssignmentsItemWrapper>
  )
}
export default AssignmentsItem

const AssignmentsItemWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  cursor: 'pointer',

  ':nth-child(odd)': {
    backgroundColor: '#EDF2F7'
  },

  [theme.breakpoints.down('xl')]: {
    padding: '8px'
  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontweight: 400,
  lineHeight: '20px',
  textAlign: 'left',
  color: '#4A5568',

  [theme.breakpoints.down('xl')]: {
    fontSize: '13px',
  }
}))

const NumberTextWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '24px',
  height: '24px',
  backgroundColor: '#FF7500',
  borderRadius: '100%',
  padding: '2px 0px',

  [theme.breakpoints.down('xl')]: {
    width: '20px',
    height: '20px',
  }
}))

const NumberText = styled(Text)(() => ({
  color: '#F7FAFC',
  fontweight: 600,
}))
