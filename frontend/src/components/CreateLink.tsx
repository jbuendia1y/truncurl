import {
  Alert,
  AlertIcon,
  AlertTitle,
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
} from "@chakra-ui/react";
import { createRef, useState } from "react";
import { useForm, SubmitErrorHandler } from "react-hook-form";
import { ICreateLink } from "../models";
import { LinksService } from "../services";

const CreateLink = (props: { open: boolean; onClose: () => void }) => {
  const { open, onClose } = props;
  const { register, handleSubmit, formState } = useForm<ICreateLink>();
  const [error, setError] = useState<any>();

  const buttonRef = createRef<HTMLButtonElement>();

  const onSubmit = async (fields: ICreateLink) => {
    const linksService = new LinksService();
    try {
      await linksService.create(fields);
      setError(null);
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
        <DrawerHeader borderBottomWidth="1px">Crear link</DrawerHeader>
        <DrawerBody>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap={5}
          >
            <FormControl>
              <FormLabel>Nombre (Opcional)</FormLabel>
              <Input placeholder={"Nombre del link"} {...register("name")} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>URL</FormLabel>
              <Input
                type="url"
                placeholder={"example: https://google.com"}
                {...register("url", { required: true })}
              />
            </FormControl>
            <button hidden type="submit" ref={buttonRef}>
              Guardar
            </button>
            {formState.isSubmitSuccessful && !error && (
              <Alert variant="left-accent" status="success">
                <AlertIcon />
                Link creado
              </Alert>
            )}
            {error && (
              <Alert variant="left-accent" status="error">
                <AlertIcon />
                Ocurrió un error !
              </Alert>
            )}
          </Box>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button
            variant="outline"
            mr={3}
            onClick={onClose}
            isDisabled={formState.isSubmitting}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="blue"
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

export default CreateLink;
