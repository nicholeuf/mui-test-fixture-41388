import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import DynamicScrollableTabs from './components/DynamicScrollableTabs';
import Container from '@mui/material/Container';

const Home = () => {
  return (
    <Box component="main">
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Example Tabs
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          Example originally taken from{' '}
          <Link href="https://mui.com/material-ui/react-tabs/#basics">
            MUI Documentation
          </Link>
          .
        </Typography>
        <DynamicScrollableTabs />
      </Container>
    </Box>
  );
};

export default Home;
