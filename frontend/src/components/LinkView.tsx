import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { faCalendar, faCopy, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ILink } from "../models";
import { formatDate } from "../utils";

interface Props {
  data: ILink;
}

const LinkView = (props: Props) => {
  const { data } = props;
  const { onCopy, hasCopied } = useClipboard(
    `http://localhost:5173/${data.hash}`
  );

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Heading as="h3" size="3xl">
          {data.name}
        </Heading>
        <Box>
          <Button
            leftIcon={<FontAwesomeIcon icon={faPen} />}
            colorScheme="blue"
            size="sm"
          >
            Editar
          </Button>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="center">
        <FontAwesomeIcon icon={faCalendar} />
        <Text>{formatDate(data.createdAt)}</Text>
      </Stack>

      <Stack direction="row" alignItems="center" flexWrap="wrap" marginTop={5}>
        <Link
          href={`http://localhost:5173/${data.hash}`}
          color="blue.500"
          fontSize="2xl"
        >
          localhost:5173/{data.hash}
        </Link>
        <Button
          leftIcon={<FontAwesomeIcon icon={faCopy} />}
          variant="outline"
          colorScheme="blue"
          size="xs"
          onClick={onCopy}
        >
          {hasCopied ? "Copiado !" : "Copiar"}
        </Button>
      </Stack>
      <Text>Original: {data.url}</Text>
    </Box>
  );
};

export default LinkView;
