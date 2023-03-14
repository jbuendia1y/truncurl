import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AppBar } from '../../../components';

interface IForm {
  email: string;
}

const RecoverPassword = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit = (fields: IForm) => {};

  return (
    <Box>
      <AppBar />
      <Container maxWidth='container.sm' textAlign='center' marginTop={10}>
        <Heading as='h1' size='2xl'>
          Olvidaste tu contraseña ?
        </Heading>
        <Text>Se le enviará un código al correo electrónico</Text>
        <Box as='form' onSubmit={handleSubmit(onSubmit)} marginX='auto'>
          <FormControl marginY={5}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type='email'
              placeholder='tucorreo@example.com'
              isRequired
              size='lg'
              {...register('email', { required: true })}
            />
          </FormControl>
          <Button colorScheme='blue' variant='solid' width='100%'>
            Enviar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RecoverPassword;
