import { Stack, Typography, styled } from "@mui/material"
import angleIcon from '../../../assets/icons/angle.svg'

const Breadcrumb = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      sx={{ height: '45px' }}
    >
      <Text>
        Orders
        <img src={angleIcon} alt="icon" style={{ padding: "0px 8px" }} />
        <span>Orders</span>
      </Text>
    </Stack>
  )
}
export default Breadcrumb

const Text = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'center',
  color: '#718096',

  span: {
    color: '#2D3748',
  }
}))

