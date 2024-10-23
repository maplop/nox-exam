import { Box, Typography } from "@mui/material"
import { BadgeDataProps } from "../../data/badgeData"

const Badge = ({ name, color, isContained }: BadgeDataProps) => {
  return (
    <Box
      sx={{
        padding: '0px 4px',
        borderRadius: '2px',
        border: `1px solid ${color}`,
        textTransform: 'uppercase',
        backgroundColor: isContained ? color : 'inherit'
      }}>
      <Typography sx={{
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '16px',
        textAlign: 'left',
        color: isContained ? '#FFF' : color
      }}>
        {name}
      </Typography>
    </Box>
  )
}
export default Badge