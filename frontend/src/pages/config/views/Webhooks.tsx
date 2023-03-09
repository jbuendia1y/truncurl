import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from '@chakra-ui/react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const WebhooksTable = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Eventos</Th>
            <Th>URL</Th>
            <Th>Estatus</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th textTransform='none'>My NodeAPP</Th>
            <Th>Links, Click</Th>
            <Th textTransform='none'>http://125.586.22.35.1/</Th>
            <Th>
              <Box
                as='span'
                display='inline-block'
                width='10px'
                height='10px'
                borderRadius='50%'
                bg='green.300'
                marginRight={2.5}
              />
              Activo
            </Th>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Webhooks = () => {
  // Puede ser un contexto para no llamar a este hook
  const [isLarger] = useMediaQuery('(min-width: 1024px)');
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen((v) => !v);
  };

  if (!isLarger)
    return (
      <Drawer isOpen={open} onClose={onClose} placement='right' size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Webhooks</DrawerHeader>
          <DrawerBody>
            <Button
              variant='solid'
              colorScheme='blue'
              leftIcon={<FontAwesomeIcon icon={faPlus} />}
            >
              Añadir
            </Button>
            <WebhooksTable />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );

  return (
    <Container maxWidth='container.xl'>
      <Stack direction='row' justifyContent='space-between' flexWrap='wrap'>
        <Heading as='h2' size='2xl'>
          Webhooks
        </Heading>
        <Button
          variant='solid'
          colorScheme='blue'
          leftIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Añadir
        </Button>
      </Stack>
      <WebhooksTable />
    </Container>
  );
};

export default Webhooks;
