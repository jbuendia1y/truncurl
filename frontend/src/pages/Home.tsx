import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Footer, AppBar } from "../components";

import Device from "../assets/Device.svg";
import Waves from "../assets/waves.svg";
import WhiteWaves from "../assets/white-waves.svg";
import ReactLogo from "../assets/react.svg";

const Home = () => {
  return (
    <Box>
      <AppBar />
      <Container as="header" maxWidth="container.xl">
        <Flex alignItems="center" gap={10}>
          <Heading as="h1" size="4xl">
            Menos anuncios, mejores redirecciones
          </Heading>
          <Image
            src={Device}
            alt="dispositivo"
            boxSize="600px"
            paddingTop={10}
          />
        </Flex>
      </Container>

      <Container as="section" maxWidth="container.xl">
        <Grid placeContent="center unset" minHeight="50vh">
          <Flex justifyContent="space-between" marginY="auto">
            <Box>
              <Heading as="h2" size="3xl">
                Integración
              </Heading>
              <Text as="p" fontSize="lg">
                Maneje los eventos de su aplicación con la tecnología de los
                webhooks
              </Text>
            </Box>
            <Image src={ReactLogo} alt="react" boxSize="100px" />
          </Flex>
        </Grid>
      </Container>

      <Container as="section" maxWidth="container.xl">
        <Grid placeContent="center unset" minHeight="50vh">
          <Flex justifyContent="space-between" marginY="auto">
            <Box>
              <Heading as="h2" size="3xl">
                Monitoreo en tiempo real
              </Heading>
              <Text as="p" fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
                esse veritatis. Inventore placeat maiores perferendis, minus
                blanditiis a pariatur quidem rem dicta quam aperiam doloremque
                sed veniam alias nostrum ut.
              </Text>
            </Box>
            <Image src={ReactLogo} alt="react" boxSize="100px" />
          </Flex>
        </Grid>
      </Container>

      <Box>
        <Image src={WhiteWaves} width="100%" transform="translateY(125px)" />
        <Box backgroundColor="teal.400">
          <Grid placeContent="center unset" minHeight="85vh">
            <Container maxWidth="container.md" marginY="auto">
              <Box color="white" textAlign="center" marginBottom={5}>
                <Heading as="h2" size="3xl">
                  Empieza ahora
                </Heading>
                <Text marginY={5}>
                  Para empezar a disfrutar todas las características de la
                  aplicación,{" "}
                  <Link href="/auth/register" color="HighlightText">
                    regístrate
                  </Link>
                </Text>
              </Box>
              <Flex gap={5}>
                <Input
                  placeholder="Ingresa la URL a redireccionar"
                  backgroundColor="white"
                />
                <Button paddingX="45px">Redireccionar</Button>
              </Flex>
            </Container>
          </Grid>
        </Box>
        <Image src={Waves} width="100%" transform="translateY(-5px)" />
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
