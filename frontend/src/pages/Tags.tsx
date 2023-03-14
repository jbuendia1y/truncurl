import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { AppBar, CreateTag, DeleteTag, EditTag, Sidenav } from '../components';
import { useTags } from '../hooks';
import { ITag } from '../models';

const Tags = () => {
  const { tags } = useTags();
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const [open, setOpen] = useState({
    create: false,
    edit: false,
    delete: false,
  });

  const onChange = (value: string[]) => {
    setSelecteds(value);
  };

  const onOpen = (key: keyof typeof open) => {
    return () => setOpen((v) => ({ ...v, [key]: true }));
  };

  const onClose = (key: keyof typeof open) => {
    return () => setOpen((v) => ({ ...v, [key]: false }));
  };

  return (
    <Box display='flex'>
      <Sidenav />
      <Box width='100%'>
        <AppBar />
        <Container maxWidth='container.xl' marginTop={5}>
          <Flex justifyContent='space-between' flexWrap={'wrap'} gap={2}>
            <Heading as='h2' size='3xl'>
              Etiquetas
            </Heading>
            <Stack direction='row' flexWrap={'wrap'}>
              <Button
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                colorScheme='blue'
                variant='solid'
                size='sm'
                onClick={onOpen('create')}
              >
                Añadir
              </Button>
              <Button
                leftIcon={<FontAwesomeIcon icon={faPen} />}
                colorScheme='blue'
                variant='outline'
                size='sm'
                isDisabled={selecteds.length !== 1}
                onClick={onOpen('edit')}
              >
                Editar
              </Button>
              <Button
                leftIcon={<FontAwesomeIcon icon={faTrash} />}
                colorScheme='blue'
                variant='outline'
                size='sm'
                isDisabled={selecteds.length === 0}
                onClick={onOpen('delete')}
              >
                Eliminar
              </Button>
            </Stack>
          </Flex>
          {tags && selecteds.length === 1 && (
            <EditTag
              open={open.edit}
              onClose={onClose('edit')}
              tag={tags.find((v) => v.id === selecteds[0]) as ITag}
            />
          )}
          {open.delete && selecteds && (
            <DeleteTag
              open={open.delete}
              onClose={onClose('delete')}
              tags={selecteds}
            />
          )}
          <CreateTag open={open.create} onClose={onClose('create')} />
          <Stack direction='row' marginY={2.5}>
            <Text fontWeight='bold'>Total: 2</Text>
            <Text fontWeight='bold'>Seleccionados: {selecteds.length}</Text>
          </Stack>
          <CheckboxGroup onChange={onChange}>
            <Stack>
              {tags?.map((v) => (
                <Checkbox key={v.id} value={v.id}>
                  {v.name}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </Container>
      </Box>
    </Box>
  );
};

export default Tags;
