import { Box, styled, Typography } from "@mui/material"
import { BadgeDataProps } from "../../data/badgeData"

const Badge = ({ name, color, isContained }: BadgeDataProps) => {
  return (
    <BadgeWrapper
      color={color}
      isContained={isContained}
    >
      <Text>
        {name}
      </Text>
    </BadgeWrapper>
  )
}
export default Badge

const BadgeWrapper = styled(Box)<{ color: string, isContained: boolean | undefined }>(({ theme, color, isContained }) => ({
  padding: '0px 4px',
  borderRadius: '2px',
  border: `1px solid ${color}`,
  textTransform: 'uppercase',
  backgroundColor: isContained ? color : 'inherit',
  color: isContained ? '#FFF' : color,

  [theme.breakpoints.down('xl')]: {

  }
}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '16px',
  textAlign: 'left',

  [theme.breakpoints.down('xl')]: {
    fontSize: '11px',
  }
}))
