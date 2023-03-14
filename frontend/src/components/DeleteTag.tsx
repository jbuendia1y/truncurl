import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { TagsService } from '../services';

const DeleteTag = (props: {
  open: boolean;
  onClose: () => void;
  tags: string[];
}) => {
  const { open, onClose, tags } = props;

  const onSubmit = async () => {
    const tagsService = new TagsService();
    for (const id of tags) {
      await tagsService.delete(id);
    }
  };

  return (
    <Modal isOpen={open} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Está seguro ?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Se eliminarán las etiquetas seleccionadas</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant='ghost' mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme='blue' onClick={onSubmit}>
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteTag;
