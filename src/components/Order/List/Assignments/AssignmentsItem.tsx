import { Box, Typography } from "@mui/material"
import Avatar from "../../../common/Avatar"

interface AssignmentsItemProps {
  img: string,
  name: string,
  number: number
}

const AssignmentsItem = ({ img, name, number }: AssignmentsItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',

        ':nth-child(odd)': {
          backgroundColor: '#EDF2F7'
        }
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar img={img} size={24} />
        <Typography sx={{
          fontSize: '14px',
          fontweight: 400,
          lineHeight: '20px',
          textAlign: 'left',
          color: '#4A5568'
        }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '24px', height: '24px', backgroundColor: '#FF7500', borderRadius: '100%', padding: '2px 0px' }}>
        <Typography sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          color: '#F7FAFC'
        }}>
          {number}
        </Typography>
      </Box>
    </Box >
  )
}
export default AssignmentsItem