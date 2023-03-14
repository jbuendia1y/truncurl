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
  Flex,
  Grid,
  Heading,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react';
import { faCloudArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {
  AppBar,
  CreateLink,
  LinkCard,
  LinkFilters,
  LinkView,
  Sidenav,
} from '../components';
import EditLink from '../components/EditLink';
import { useLinks } from '../hooks';

const Links = () => {
  const [isLarger] = useMediaQuery('(min-width: 1024px)');
  const [open, setOpen] = useState({
    content: false,
    edit: false,
    create: false,
  });

  const { links, filter, changeFilter, loading, selectedLink, selectLink } =
    useLinks();

  const onClose = (key: keyof typeof open) => {
    return () => setOpen((v) => ({ ...v, [key]: false }));
  };

  const onOpen = (key: keyof typeof open) => {
    return () => setOpen((v) => ({ ...v, [key]: true }));
  };

  return (
    <Box display='flex'>
      <Sidenav />
      <Box width='100%'>
        <AppBar />
        <Container maxWidth='container.xl' marginTop={5}>
          <Flex justifyContent='space-between' flexWrap={'wrap'}>
            <Heading as='h2' size='3xl'>
              Links
            </Heading>
            <Stack direction='row'>
              <Button
                variant='solid'
                colorScheme='blue'
                size='sm'
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                onClick={onOpen('create')}
              >
                Nuevo
              </Button>
              <Button
                variant='outline'
                colorScheme='blue'
                size='sm'
                leftIcon={<FontAwesomeIcon icon={faCloudArrowDown} />}
              >
                Exportar
              </Button>
            </Stack>
          </Flex>
          <LinkFilters changeFilter={changeFilter} filters={filter} />
          <CreateLink open={open.create} onClose={onClose('create')} />
          {selectedLink && open.edit && (
            <EditLink
              open={open.edit}
              onClose={onClose('edit')}
              link={selectedLink}
            />
          )}
          <Grid gridTemplateColumns={'.4fr 1fr'}>
            <Stack>
              {loading ? (
                <></>
              ) : (
                links.map((v) => (
                  <LinkCard
                    key={v.hash}
                    data={v}
                    onClick={() => {
                      selectLink(v.id);
                      onOpen('content')();
                    }}
                  />
                ))
              )}
            </Stack>
            {selectedLink ? (
              isLarger ? (
                <LinkView data={selectedLink} onEdit={onOpen('edit')} />
              ) : (
                <Drawer
                  isOpen={open.content}
                  placement='right'
                  size='full'
                  onClose={onClose('content')}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Link</DrawerHeader>
                    <DrawerBody>
                      <LinkView data={selectedLink} onEdit={onOpen('edit')} />
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              )
            ) : (
              <></>
            )}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Links;
