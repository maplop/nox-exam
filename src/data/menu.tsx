import GridViewIcon from '@mui/icons-material/GridView';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import StorageIcon from '@mui/icons-material/Storage';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ROUTES from '../routes/routes';

type MenuItem = {
  name: string;
  icon: JSX.Element;
  url: string;
};

const menuData: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: <GridViewIcon />,
    url: ROUTES.DASHBOARD,
  },
  {
    name: 'Orders',
    icon: <DescriptionOutlinedIcon />,
    url: ROUTES.ORDERS.BASE,
  },
  {
    name: 'Banners',
    icon: <InsertPhotoOutlinedIcon />,
    url: ROUTES.BANNERS,
  },
  {
    name: 'Public Info',
    icon: <ImportContactsRoundedIcon />,
    url: ROUTES.PUBLIC_INFO,
  },
  {
    name: 'Notifications',
    icon: <NotificationsNoneRoundedIcon />,
    url: ROUTES.NOTIFICATIONS,
  },
  {
    name: 'Roulette Game',
    icon: <SportsEsportsRoundedIcon />,
    url: ROUTES.ROULETTE_GAME,
  },
  {
    name: 'Inventories',
    icon: <StorageIcon />,
    url: ROUTES.INVENTORIES,
  },
  {
    name: 'Coupons',
    icon: <CardGiftcardIcon />,
    url: ROUTES.COUPONS,
  },
  {
    name: 'Shippings',
    icon: <LocalShippingOutlinedIcon />,
    url: ROUTES.SHIPPINGS,
  },
];

export default menuData;

