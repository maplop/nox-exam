import { Box } from "@mui/material"
import avatar from "../../assets/avatar.png"

const Avatar = () => {
  return (
    <Box sx={{ width: 40, height: 40, borderRadius: '100%', overflow: 'hidden' }}>
      <img src={avatar} alt="avatar-img" />
    </Box>
  )
}
export default Avatar