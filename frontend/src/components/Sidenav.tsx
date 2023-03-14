import {
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import {
  faChevronLeft,
  faGear,
  faHome,
  faLink,
  faTags,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSidenav } from '../hooks';
import { Link as ReactLink } from 'react-router-dom';

const SidenavIcon = (props: { icon: any }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      backgroundColor='white'
      color='teal.500'
      minWidth={35}
      width={35}
      height={35}
      borderRadius='5px'
      marginRight={3.5}
    >
      <FontAwesomeIcon fontSize={'20px'} icon={props.icon} />
    </Box>
  );
};

const SidenavItem = (props: { icon: any; label: string; href: string }) => {
  const { href, icon, label } = props;
  return (
    <ListItem
      display='flex'
      alignItems='center'
      marginY={4}
      transition='filter 0.25s'
      _hover={{
        filter: 'brightness(90%)',
      }}
    >
      <Link
        as={ReactLink}
        display='flex'
        alignItems='center'
        width='100%'
        to={href}
      >
        <SidenavIcon icon={icon} />
        {label}
      </Link>
    </ListItem>
  );
};

const links: { icon: any; label: string; href: string }[] = [
  {
    icon: faHome,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: faLink,
    label: 'Links',
    href: '/links',
  },
  {
    icon: faTags,
    label: 'Etiquetas',
    href: '/tags',
  },
];

const Sidenav = () => {
  const { open, toggle, isLargerThan900 } = useSidenav();

  return (
    <Box
      overflow='hidden'
      maxWidth='225px'
      minWidth={open ? '225px' : isLargerThan900 ? '60px' : '0px'}
      width={open ? '225px' : isLargerThan900 ? '60px' : '0px'}
      backgroundColor='teal.500'
      height='100vh'
      color='white'
      transition='width .5s ease, min-width .5s ease'
      {...(!isLargerThan900
        ? {
            position: 'fixed',
            top: 0,
            left: 0,
          }
        : {
            position: 'sticky',
            top: 0,
          })}
      zIndex='10'
    >
      <Box paddingY={2.5} paddingX={3} height='60px'>
        <Box>
          <Text whiteSpace='nowrap'>URL Shortenner</Text>
        </Box>
      </Box>
      <Divider marginBottom={5} />
      <List paddingX={3}>
        {links.map((v) => (
          <SidenavItem key={v.href} {...v} />
        ))}
      </List>
      <Box paddingX={3} marginBottom={5}>
        <Divider />
      </Box>
      <List paddingX={3}>
        {[
          // {
          //   icon: faCode,
          //   label: "Integraciónes",
          //   href: "/integrations",
          // },
          {
            icon: faGear,
            label: 'Configuración',
            href: '/settings',
          },
        ].map((v) => (
          <SidenavItem key={v.href} {...v} />
        ))}
      </List>
      <Box display='flex' justifyContent='flex-end' paddingX={3} marginX='auto'>
        <Button
          onClick={toggle}
          variant='solid'
          colorScheme={'gray'}
          color='teal.500'
          width={35}
          height={35}
        >
          <Box
            display='flex'
            alignItems='center'
            width={35}
            height={35}
            fontSize={'20px'}
          >
            <FontAwesomeIcon
              transform={{
                flipX: open,
              }}
              icon={faChevronLeft}
            />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Sidenav;
