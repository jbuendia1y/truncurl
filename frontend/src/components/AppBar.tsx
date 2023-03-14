import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  faBars,
  faRightToBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth, useSidenav } from '../hooks';
import { Link as ReactLink } from 'react-router-dom';

const AppBar = () => {
  const { toggle } = useSidenav();
  const { user, logout } = useAuth();

  if (user) {
    return (
      <Box
        paddingX={5}
        paddingY={2.5}
        boxShadow='base'
        maxHeight='60px'
        display='flex'
        justifyContent='space-between'
        backgroundColor='white'
        position='sticky'
        top='0'
        zIndex='2'
      >
        <Button onClick={toggle}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Box></Box>
        <Menu>
          <MenuButton>
            <Avatar
              bg='teal.500'
              fontSize='1rem'
              width={'40px'}
              height={'40px'}
              icon={<FontAwesomeIcon icon={faUser} />}
            />
          </MenuButton>
          <MenuList>
            <MenuItem as={ReactLink} to='/settings/profile'>
              <Box
                mr='10px'
                boxSize='2rem'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FontAwesomeIcon icon={faUser} />
              </Box>
              Mi perfil
            </MenuItem>
            <MenuItem onClick={logout}>
              <Box
                mr='10px'
                boxSize='2rem'
                display='flex'
                alignItems='center'
                justifyContent='center'
              >
                <FontAwesomeIcon icon={faRightToBracket} />
              </Box>
              Cerrar sessión
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    );
  }

  return (
    <Box paddingX={5} paddingY={2.5} boxShadow='base'>
      <List display='flex' justifyContent='space-between'>
        <ListItem>
          <Link as={ReactLink} to='/'>
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReactLink} to='/auth/login'>
            Iniciar sessión
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default AppBar;
