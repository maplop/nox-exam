import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const capitalizeWords = (str: string) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const BreadcrumbsComponent = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightOutlinedIcon />}>

      {pathSegments.length > 0 ? (
        pathSegments.map((segment, index) => {
          const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
          return (
            <Link
              key={routeTo}
              component={RouterLink}
              to={routeTo}
              style={{
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                textDecoration: 'none',
                color: '#718096'
              }}
            >
              {capitalizeWords(segment)}
            </Link>
          );
        })
      ) : (
        <Typography sx={{
          fontSize: '16px',
          fontWeight: 600,
          lineHeight: '24px',
          textDecoration: 'none',
          color: '#718096'
        }}>
          Home
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent
