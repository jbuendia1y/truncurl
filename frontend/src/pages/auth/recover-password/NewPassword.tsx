import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AppBar } from "../../../components";

interface IForm {
  newPassword: string;
}

const NewPassword = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit = (fields: IForm) => {};

  return (
    <Box>
      <AppBar />
      <Container maxWidth="container.md" textAlign="center" marginTop={10}>
        <Heading as="h1" size="2xl">
          Excelente solo un último paso
        </Heading>
        <Text>Al terminar será redirigido para iniciar sessión</Text>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          marginX="auto"
          maxWidth="360px"
        >
          <FormControl marginY={5}>
            <FormLabel>Ingrese su nueva contraseña</FormLabel>
            <Input {...register("newPassword")} placeholder="*********" />
          </FormControl>
          <Button colorScheme="blue" variant="solid" type="submit" width="100%">
            Finalizar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewPassword;
