import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  faCloudArrowDown,
  faFilter,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AppBar, LinkCard, LinkView, Sidenav } from "../components";

const Links = () => {
  const [isLarger] = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const MockLink = {
    createdAt: new Date(),
    hash: "bD25Os",
    url: "https://google.com",
    name: "Google",
    userId: "MY_USER_ID",
  };

  return (
    <Box display="flex">
      <Sidenav />
      <Box width="100%">
        <AppBar />
        <Container maxWidth="container.xl" marginTop={5}>
          <Flex justifyContent="space-between" flexWrap={"wrap"}>
            <Heading as="h2" size="3xl">
              Links
            </Heading>
            <Stack direction="row">
              <Button
                variant="solid"
                colorScheme="blue"
                size="sm"
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
              >
                Nuevo
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                leftIcon={<FontAwesomeIcon icon={faCloudArrowDown} />}
              >
                Exportar
              </Button>
            </Stack>
          </Flex>
          <Accordion allowToggle marginY={2.5}>
            <AccordionItem>
              <p>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {" "}
                    <FontAwesomeIcon icon={faFilter} /> Filtros
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </p>
              <AccordionPanel>Filtros</AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Grid gridTemplateColumns={".4fr 1fr"}>
            <Stack>
              {Array(10)
                .fill(0)
                .map((_, idx) => (
                  <LinkCard
                    key={MockLink.hash + idx}
                    data={MockLink}
                    onClick={() => {
                      setOpen(true);
                    }}
                  />
                ))}
            </Stack>
            {isLarger ? (
              <LinkView data={MockLink} />
            ) : (
              <Drawer
                isOpen={open}
                placement="right"
                size="full"
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Link</DrawerHeader>
                  <DrawerBody>
                    <LinkView data={MockLink} />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Links;
