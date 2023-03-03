import {
  Box,
  Container,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AppBar, Sidenav } from "../../components";
import { Profile, Webhooks } from "./views";

const Configuration = () => {
  const [isLarger] = useMediaQuery("(min-width: 1024px)");
  const [currentPath, setCurrentPath] = useState(window.location.href);
  useEffect(() => {
    setCurrentPath(window.location.href);
  }, [window.location.href]);

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
                <Link href="/config/profile">Perfil</Link>
              </ListItem>
              <ListItem>
                <Link href="/config/webhooks">Webhooks</Link>
              </ListItem>
            </List>
          </Box>
          {currentPath.includes("/config/profile") ? <Profile /> : <Webhooks />}
        </Container>
      </Box>
    </Box>
  );
};

export default Configuration;
