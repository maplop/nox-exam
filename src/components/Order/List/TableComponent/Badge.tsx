import { Box, styled, Typography } from "@mui/material"

interface BadgeProps {
  name: string,
  color: string,
  background: string
}

const Badge = ({ name, color, background }: BadgeProps) => {
  return (
    <BadgeWrapper background={background}>
      <Text color={color}>
        {name}
      </Text>
    </BadgeWrapper>
  )
}
export default Badge

const BadgeWrapper = styled(Box)<{ background: string }>(({ background }) => ({
  width: 'fit-content',
  padding: '0px 4px',
  borderRadius: '2px',
  backgroundColor: background
}))

const Text = styled(Typography)<{ color: string }>(({ theme, color }) => ({
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16px',
  textAlign: 'left',
  color: color,
  textTransform: 'uppercase',

  [theme.breakpoints.down('xl')]: {
    fontSize: '11px',
  }
}))
