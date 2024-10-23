import { Box, Typography } from "@mui/material"

interface BadgeProps {
  name: string,
  color: string,
  background: string
}

const Badge = ({ name, color, background }: BadgeProps) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        padding: '0px 4px',
        borderRadius: '2px',
        backgroundColor: background
      }}>
      <Typography sx={{
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '16px',
        textAlign: 'left',
        color: color,
        textTransform: 'uppercase',
      }}>
        {name}
      </Typography>
    </Box>
  )
}
export default Badge