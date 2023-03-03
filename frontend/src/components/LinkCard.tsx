import { Box, Text } from "@chakra-ui/react";
import { ILink } from "../models";
import { formatDate } from "../utils";

interface Props {
  data: ILink;
  onClick?: (hash: string) => void;
}

const LinkCard = (props: Props) => {
  const { data, onClick = (hash) => {} } = props;

  return (
    <Box onClick={() => onClick(data.hash)}>
      <Text fontSize="sm" colorScheme="gray" opacity={0.5}>
        {formatDate(data.createdAt)}
      </Text>
      <Text fontSize="2xl">{data.hash}</Text>
      <Text fontSize="sm">{data.url}</Text>
    </Box>
  );
};

export default LinkCard;
