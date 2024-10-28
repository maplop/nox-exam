import { Box, styled, Typography } from "@mui/material"

interface SectionTitleProps {
  title: string,
  subtitle?: string
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <Box>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Box>
  )
}
export default SectionTitle

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  lineHeight: '30px',
  textAlign: 'left',
  color: '#05004E',

  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
    lineHeight: '28px',
  }
}))


const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'left',
  color: '#737791',

  [theme.breakpoints.down('xl')]: {
    fontSize: '14px',
    lineHeight: '22px',
  }
}))



