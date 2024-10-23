import { Box } from "@mui/material"
import Badge from "../../common/Badge"
import { badgeData } from "../../../data/badgeData"

const BadgeGroup = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {badgeData.map((item, index) => (
        <Badge key={index} name={item.name} color={item.color} isContained={item.isContained} />
      ))}
    </Box>
  )
}
export default BadgeGroup
