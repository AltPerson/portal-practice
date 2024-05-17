import { navItems } from '@/lib/constants';
import SportsEsportsTwoToneIcon from '@mui/icons-material/SportsEsportsTwoTone';
import { AppBar, Box, Container, List, ListItem } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar>
      <Container disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <SportsEsportsTwoToneIcon />
          <Link href="/" style={{ textDecoration: 'none', color: 'white', display: 'block' }}>
            Test Portal
          </Link>
        </Box>
        <List sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <Link href={item.href} style={{ textDecoration: 'none', color: 'white' }}>
                {item.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Container>
    </AppBar>
  );
};

export default Navbar;
