import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppBar } from '../../../components';

const EnterCode = () => {
  const [code, setCode] = useState<string>();

  const onChange = (value: string) => {
    setCode(value);
  };

  const onSubmit = () => {};

  return (
    <Box>
      <AppBar />
      <Container maxWidth='container.sm' textAlign='center' marginTop={10}>
        <Heading as='h1' size='2xl'>
          Ingrese su código de verificación
        </Heading>
        <Text marginBottom={5}>
          Ingrese el código enviado a su correo electrónico
        </Text>
        <Box as='form' onSubmit={onSubmit} marginX='auto'>
          <HStack justifyContent='center'>
            <PinInput size='lg' onChange={onChange}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <Button
            colorScheme='blue'
            variant='solid'
            type='submit'
            width='100%'
            marginTop={5}
          >
            Continuar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EnterCode;
