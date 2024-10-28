import { Box } from "@mui/material"
import Grid from '@mui/material/Grid2';
import FormControl from "./FormControl"
import SectionTitle from "../../../common/SectionTitle";

const OrderUserComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SectionTitle
        title="Order User"
        subtitle="User creating the order"
      />
      <Box sx={{ padding: "10px 0px" }}>
        <Box sx={{ padding: '10px 0px' }}>
          <FormControl label="Username" value="rolando" />
        </Box>
        <Grid container spacing={"20px"} sx={{ padding: '10px 0px' }}>
          <Grid size={6}>
            <FormControl label="Firstname" value="Rolando" />
          </Grid>
          <Grid size={6}>
            <FormControl label="Lastname" value="Fonseca Martines" />
          </Grid>
        </Grid>
        <Box sx={{ padding: '10px 0px' }}>
          <FormControl label="Identity Card" value="8502034587" />
        </Box>
        <Grid container spacing={"20px"} sx={{ padding: '10px 0px' }}>
          <Grid size={6}>
            <FormControl label="Phone Number" value="+53 5 741 23 69" />
          </Grid>
          <Grid size={6}>
            <FormControl label="Email" value="rolando@gmail.com" />
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}
export default OrderUserComponent