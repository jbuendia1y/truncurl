import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AppBar } from '../../components';

interface Form {
  email: string;
  username: string;
  password: string;
}

const Register = () => {
  const { handleSubmit, register } = useForm<Form>();

  const onSubmit = async (fields: Form) => {};

  return (
    <Box>
      <AppBar />
      <Container textAlign='center'>
        <Box marginY={5}>
          <Heading as='h1' size='2xl'>
            Registro de usuario
          </Heading>
          <Text>
            Ya tiene una cuenta ? <Link color={'blue.500'}>inicie sessión</Link>
          </Text>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input
                placeholder='Ingrese un nombre de usuario'
                size='lg'
                {...register('username', { required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Correo electrónico</FormLabel>
              <Input
                type='email'
                placeholder='example@example.com'
                size='lg'
                {...register('email', { required: true })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                type='password'
                placeholder='***********'
                size='lg'
                {...register('password', { required: true })}
              />
            </FormControl>
          </Stack>
          <Button
            type='submit'
            width='100%'
            variant='solid'
            colorScheme='blue'
            marginTop={5}
          >
            Registrarse
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Register;
