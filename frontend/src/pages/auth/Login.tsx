import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  faFacebook,
  faGithub,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { AppBar } from '../../components';
import { useAuth } from '../../hooks';

interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const { handleSubmit, register } = useForm<Form>();

  const onSubmit = async (fields: Form) => {
    await login(fields.email, fields.password);
  };

  return (
    <Box>
      <AppBar />
      <Container textAlign='center' marginTop={10}>
        <Box marginBottom={5}>
          <Heading as='h1' size='2xl'>
            Accede y comienza
          </Heading>
          <Text>
            No tienes cuenta?{' '}
            <Link href='/auth/register' color='blue.500'>
              regístrate
            </Link>
          </Text>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl marginBottom={5}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type='email'
              placeholder='example@example.com'
              isRequired
              size='lg'
              {...register('email', { required: true })}
            />
          </FormControl>
          <FormControl marginBottom={5}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type='password'
              placeholder='**********'
              isRequired
              size='lg'
              {...register('password', { required: true })}
            />
          </FormControl>
          <Button type='submit' width='100%' variant='solid' colorScheme='blue'>
            Iniciar sessión
          </Button>
        </form>
        <Link
          href='/auth/recover-password'
          color='blue.500'
          display='block'
          marginY={2.5}
        >
          Olvidaste tu contraseña ?
        </Link>
        <Stack>
          <Button
            variant='outline'
            colorScheme='gray'
            leftIcon={<FontAwesomeIcon icon={faGoogle} />}
          >
            Google
          </Button>
          <Button
            variant='outline'
            colorScheme='facebook'
            leftIcon={<FontAwesomeIcon icon={faFacebook} />}
          >
            Facebook
          </Button>
          <Button
            variant='outline'
            colorScheme='gray'
            leftIcon={<FontAwesomeIcon icon={faGithub} />}
          >
            Github
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
