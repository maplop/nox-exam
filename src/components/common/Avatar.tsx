import { Box } from "@mui/material"


interface AvatarProps {
  img: string,
  size?: number
}

const Avatar = ({ img, size = 40 }: AvatarProps) => {
  return (
    <Box sx={{ width: size, height: size, borderRadius: '100%', overflow: 'hidden' }}>
      <img src={img} alt="avatar-img" />
    </Box>
  )
}
export default Avatar