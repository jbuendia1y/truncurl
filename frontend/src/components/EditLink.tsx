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
} from "@chakra-ui/react";
import { createRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateLink, ILink } from "../models";
import { LinksService } from "../services";

const EditLink = (props: {
  open: boolean;
  onClose: () => void;
  link: ILink;
}) => {
  const { open, onClose, link } = props;
  const { register, handleSubmit, formState } = useForm<ILink>({
    defaultValues: link,
  });
  const [error, setError] = useState<any>();
  const buttonRef = createRef<HTMLButtonElement>();

  const onSubmit = (fields: ICreateLink) => {
    const linksService = new LinksService();
    try {
      linksService.update(link.id, fields);
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
        <DrawerHeader borderBottomWidth="1px">Editar link</DrawerHeader>
        <DrawerBody>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            display="flex"
            flexDirection="column"
            gap={5}
          >
            <FormControl>
              <FormLabel>Nombre (opcional)</FormLabel>
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
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              buttonRef.current?.click();
            }}
          >
            Guardar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EditLink;
