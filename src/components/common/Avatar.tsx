import { Box } from "@mui/material"

interface AvatarProps {
  img?: string,
  size?: number
}

const Avatar = ({ img, size = 40 }: AvatarProps) => {
  return (
    <Box sx={{ width: size, height: size, borderRadius: '100%', overflow: 'hidden' }}>
      <img src={img ?? '/avatares/default-avatar.png'} alt="avatar-img" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </Box>
  )
}
export default Avatar