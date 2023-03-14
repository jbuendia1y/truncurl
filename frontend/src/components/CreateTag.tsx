import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { createRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ICreateTag } from '../models';
import { TagsService } from '../services';

const CreateTag = (props: { open: boolean; onClose: () => void }) => {
  const { onClose, open } = props;
  const { register, handleSubmit, formState } = useForm<ICreateTag>();
  const [error, setError] = useState<any>();
  const buttonRef = createRef<HTMLButtonElement>();

  const onSubmit = async (fields: ICreateTag) => {
    const tagsService = new TagsService();
    try {
      await tagsService.create(fields);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
    <Drawer isOpen={open} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>Crear etiqueta</DrawerHeader>
        <DrawerBody>
          <Box
            as='form'
            display='flex'
            flexDirection='column'
            gap={5}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder={'Nombre de la etiqueta'}
                {...register('name')}
              />
            </FormControl>
            <button hidden ref={buttonRef}></button>
            {formState.isSubmitSuccessful && !error && (
              <Alert variant='left-accent' status='success'>
                <AlertIcon />
                Etiqueta creada
              </Alert>
            )}
            {error && (
              <Alert variant='left-accent' status='error'>
                <AlertIcon />
                Ocurrió un error !
              </Alert>
            )}
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Button
            variant='outline'
            mr={3}
            onClick={onClose}
            isDisabled={formState.isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            colorScheme='blue'
            onClick={() => {
              buttonRef.current?.click();
            }}
            isDisabled={formState.isSubmitting}
          >
            Guardar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateTag;
