import { Breadcrumbs, Link, styled, Typography, useMediaQuery, useTheme } from '@mui/material';
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

  const theme = useTheme();
  const isDownXL = useMediaQuery(theme.breakpoints.down('xl'));

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
                fontSize: isDownXL ? '14px' : '16px',
                fontWeight: isDownXL ? 500 : 600,
                lineHeight: '24px',
                textDecoration: 'none',
                color: isDownXL ? '#4A5568' : '#718096',
              }}
            >
              {capitalizeWords(segment)}
            </Link>
          );
        })
      ) : (
        <Text>
          Home
        </Text>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent

const Text = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  textDecoration: 'none',
  color: '#718096',
}))

