import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import StorageIcon from '@mui/icons-material/Storage';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

type MenuItem = {
  name: string;
  icon: JSX.Element;
};

const menuData: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: <GridViewIcon />,
  },
  {
    name: 'Orders',
    icon: <DescriptionOutlinedIcon />,
  },
  {
    name: 'Banners',
    icon: <InsertPhotoOutlinedIcon />,
  },
  {
    name: 'Public Info',
    icon: <ImportContactsRoundedIcon />,
  },
  {
    name: 'Notifications',
    icon: <NotificationsNoneRoundedIcon />,
  },
  {
    name: 'Roulette Game',
    icon: <SportsEsportsRoundedIcon />,
  },
  {
    name: 'Inventaries',
    icon: <StorageIcon />,
  },
  {
    name: 'Coupons',
    icon: <CardGiftcardIcon />,
  },
  {
    name: 'Shippings',
    icon: <LocalShippingOutlinedIcon />,
  },
];

export default menuData;

