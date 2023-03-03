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
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faBars,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSidenav } from "../hooks";

const AppBar = () => {
  const { toggle } = useSidenav();
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  const { user } = { user: true };

  if (user) {
    return (
      <Box
        paddingX={5}
        paddingY={2.5}
        boxShadow="base"
        maxHeight="60px"
        display="flex"
        justifyContent="space-between"
        backgroundColor="white"
        position="sticky"
        top="0"
        zIndex="2"
      >
        {!isLargerThanMd ? (
          <Button onClick={toggle}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        ) : (
          <></>
        )}
        <Box></Box>
        <Menu>
          <MenuButton>
            <Avatar
              bg="teal.500"
              fontSize="1rem"
              width={"40px"}
              height={"40px"}
              icon={<FontAwesomeIcon icon={faUser} />}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Box
                mr="10px"
                boxSize="2rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <FontAwesomeIcon icon={faUser} />
              </Box>
              Mi perfil
            </MenuItem>
            <MenuItem>
              <Box
                mr="10px"
                boxSize="2rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
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
    <Box paddingX={5} paddingY={2.5} boxShadow="base">
      <List display="flex" justifyContent="space-between">
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="/">Iniciar sessión</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default AppBar;
