import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Td,
  Tooltip,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Api } from '../../../../api/api';

export default function TrForms(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const colunas = Object.values(props.conteudo);
  const colunaId = colunas[0];

  const deletarRegistro = async () => {
    await Api.deleteRequest(`${props.url}/${colunaId}`);

    window.location.reload(true);
  };

  return (
    <>
      <Tr>
        {colunas.map((item, index) => (
          <Td key={index}>{item}</Td>
        ))}

        <Td>
          <Flex justifyContent="flex-end">
            <Tooltip hasArrow label="Ver detalhes" bg="gray.300" color="black">
              <Link to={`${props.url}/${colunaId}`}>
                <Button mr="10px">
                  <Icon icon="ic:outline-remove-red-eye" />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip
              hasArrow
              label="Excluir registro"
              bg="gray.300"
              color="black"
            >
              <Button onClick={onOpen}>
                <Icon icon="material-symbols:delete-outline" />
              </Button>
            </Tooltip>
          </Flex>
        </Td>
      </Tr>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Registro
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja deletar esse registro?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" ml={3} onClick={deletarRegistro}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
