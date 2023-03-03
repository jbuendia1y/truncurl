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
} from "@chakra-ui/react";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AppBar, Sidenav } from "../components";

const Tags = () => {
  const [selecteds, setSelecteds] = useState<string[]>([]);

  const onChange = (value: string[]) => {
    setSelecteds(value);
  };

  const onDelete = () => {
    alert("Estás seguro de eliminar " + selecteds.length + " etiquetas");
  };

  const onEdit = () => {};

  const MockTag = {
    id: "2d35dv64hbC",
    name: "Social",
  };

  return (
    <Box display="flex">
      <Sidenav />
      <Box width="100%">
        <AppBar />
        <Container maxWidth="container.xl" marginTop={5}>
          <Flex justifyContent="space-between" flexWrap={"wrap"} gap={2}>
            <Heading as="h2" size="3xl">
              Etiquetas
            </Heading>
            <Stack direction="row" flexWrap={"wrap"}>
              <Button
                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                colorScheme="blue"
                variant="solid"
                size="sm"
              >
                Añadir
              </Button>
              <Button
                leftIcon={<FontAwesomeIcon icon={faPen} />}
                colorScheme="blue"
                variant="outline"
                size="sm"
                isDisabled={selecteds.length !== 1}
              >
                Editar
              </Button>
              <Button
                leftIcon={<FontAwesomeIcon icon={faTrash} />}
                colorScheme="blue"
                variant="outline"
                size="sm"
                isDisabled={selecteds.length === 0}
                onClick={onDelete}
              >
                Eliminar
              </Button>
            </Stack>
          </Flex>
          <Stack direction="row" marginY={2.5}>
            <Text fontWeight="bold">Total: 2</Text>
            <Text fontWeight="bold">Seleccionados: {selecteds.length}</Text>
          </Stack>
          <CheckboxGroup onChange={onChange}>
            <Stack>
              {Array(8)
                .fill(MockTag)
                .map((v, idx) => (
                  <Checkbox key={v.id + idx} value={v.id + idx}>
                    {v.name} {idx + 1}
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
