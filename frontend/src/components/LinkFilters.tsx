import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useLinks } from "../hooks";

type Filter = ReturnType<typeof useLinks>["filter"];

const LinkFilters = (props: {
  filters: Filter;
  changeFilter: ReturnType<typeof useLinks>["changeFilter"];
}) => {
  const { changeFilter, filters } = props;
  const { register, handleSubmit } = useForm<Filter>({
    defaultValues: filters,
  });

  const onSubmit = (fields: Filter) => {
    console.log(fields);
    changeFilter(fields);
  };

  return (
    <Accordion allowToggle marginY={2.5}>
      <AccordionItem>
        <p>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <FontAwesomeIcon icon={faFilter} /> Filtros
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </p>
        <AccordionPanel as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder="Redirect name" {...register("name")} />
            </FormControl>
            <FormControl>
              <FormLabel>URL</FormLabel>
              <Input
                placeholder="example: google.com or mydomain/s2cdid8"
                {...register("url")}
              />
            </FormControl>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" marginTop={3}>
            <Button
              colorScheme="blue"
              size="sm"
              leftIcon={<FontAwesomeIcon icon={faSearch} />}
              type="submit"
            >
              Buscar
            </Button>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default LinkFilters;
