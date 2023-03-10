import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDisplay } from '../../../hooks';

const Profile = () => {
  // Puede ser un contexto para no llamar a este hook
  const { isLargerThan900: isLarger } = useDisplay();
  const [open, setOpen] = useState(!isLarger);
  const { register } = useForm();

  const onClose = () => {
    setOpen((v) => !v);
  };

  if (!isLarger)
    return (
      <Drawer isOpen={open} onClose={onClose} placement='right' size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Perfil</DrawerHeader>
          <DrawerBody>
            <Box marginBottom={5}>
              <Heading as='h3' size='xl' marginBottom={5}>
                Información básica
              </Heading>
              <Stack marginBottom={5}>
                <FormControl marginBottom={5}>
                  <FormLabel>Nombres</FormLabel>
                  <Input
                    type='text'
                    isRequired
                    size='lg'
                    {...register('firstName', { required: true })}
                  />
                </FormControl>
                <FormControl marginBottom={5}>
                  <FormLabel>Apellidos</FormLabel>
                  <Input
                    type='text'
                    isRequired
                    size='lg'
                    {...register('lastName', { required: true })}
                  />
                </FormControl>
              </Stack>
              <Button colorScheme='blue' variant='solid'>
                Guardar cambios
              </Button>
            </Box>
            <Box marginBottom={5}>
              <Heading as='h3' size='xl' marginBottom={5}>
                Seguridad
              </Heading>
              <Box>
                <Heading as='h4' size='lg'>
                  Cambiar contraseña
                </Heading>
                <Stack marginBottom={5}>
                  <FormControl marginBottom={5}>
                    <FormLabel>Contraseña actual</FormLabel>
                    <Input
                      type='password'
                      isRequired
                      size='lg'
                      {...register('currentPassword', { required: true })}
                    />
                  </FormControl>
                  <FormControl marginBottom={5}>
                    <FormLabel>Nueva contraseña</FormLabel>
                    <Input
                      type='password'
                      isRequired
                      size='lg'
                      {...register('newPassword', { required: true })}
                    />
                  </FormControl>
                  <FormControl marginBottom={5}>
                    <FormLabel>Confirmar nueva contraseña</FormLabel>
                    <Input
                      type='password'
                      isRequired
                      size='lg'
                      {...register('confirmNewPassword', { required: true })}
                    />
                  </FormControl>
                </Stack>
                <Button colorScheme='blue' variant='solid'>
                  Cambiar contraseña
                </Button>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );

  return (
    <Box>
      <Heading as='h2' size='2xl'>
        Perfil
      </Heading>
      <Divider marginBottom={5} />
      <Box marginBottom={5}>
        <Heading as='h3' size='xl' marginBottom={5}>
          Información básica
        </Heading>
        <Stack marginBottom={5}>
          <FormControl marginBottom={5}>
            <FormLabel>Nombres</FormLabel>
            <Input
              type='text'
              isRequired
              size='lg'
              {...register('firstName', { required: true })}
            />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Apellidos</FormLabel>
            <Input
              type='text'
              isRequired
              size='lg'
              {...register('lastName', { required: true })}
            />
          </FormControl>
        </Stack>
        <Button colorScheme='blue' variant='solid'>
          Guardar cambios
        </Button>
      </Box>
      <Box marginBottom={5}>
        <Heading as='h3' size='xl' marginBottom={5}>
          Seguridad
        </Heading>
        <Box>
          <Heading as='h4' size='lg'>
            Cambiar contraseña
          </Heading>
          <Stack marginBottom={5}>
            <FormControl marginBottom={5}>
              <FormLabel>Contraseña actual</FormLabel>
              <Input
                type='password'
                isRequired
                size='lg'
                {...register('currentPassword', { required: true })}
              />
            </FormControl>
            <FormControl marginBottom={5}>
              <FormLabel>Nueva contraseña</FormLabel>
              <Input
                type='password'
                isRequired
                size='lg'
                {...register('newPassword', { required: true })}
              />
            </FormControl>
            <FormControl marginBottom={5}>
              <FormLabel>Confirmar nueva contraseña</FormLabel>
              <Input
                type='password'
                isRequired
                size='lg'
                {...register('confirmNewPassword', { required: true })}
              />
            </FormControl>
          </Stack>
          <Button colorScheme='blue' variant='solid'>
            Cambiar contraseña
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
