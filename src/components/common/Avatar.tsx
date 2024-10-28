import { Box, styled } from "@mui/material"

interface AvatarProps {
  img?: string,
  size?: number
}

const Avatar = ({ img, size = 40 }: AvatarProps) => {
  return (
    <AvatarWrapper size={size}>
      <img src={img ?? '/avatares/default-avatar.png'} alt="avatar-img" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }} />
    </AvatarWrapper>
  )
}
export default Avatar

const AvatarWrapper = styled(Box)<{ size: number }>(({ size }) => ({
  width: size,
  height: size,
  borderRadius: '100%',
  overflow: 'hidden',
}))
