import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { AppBar, Sidenav } from "../../components";

const Configuration = () => {
  return (
    <Box display="flex">
      <Sidenav />
      <Box width="100%">
        <AppBar />
        <Container maxWidth="container.xl" marginTop={5} display="flex" gap={5}>
          <Box>
            <Box>
              <Heading as="h2" size="lg">
                Configuración
              </Heading>
            </Box>
            <Divider marginBottom={5} />
            <List>
              <ListItem>
                <Link href="/settings/profile">Perfil</Link>
              </ListItem>
              <ListItem>
                <Link href="/settings/webhooks">Webhooks</Link>
              </ListItem>
            </List>
          </Box>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default Configuration;
