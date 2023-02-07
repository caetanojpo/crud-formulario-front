import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Link, Stack, Td, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRef } from "react";

export default function TdForms(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
    return(
        <>
        <Tr>
        <Td>
        
            {props.formsTitulo}
       
            </Td>
        <Td>Visita</Td>
        <Td>Data</Td>
        <Td>Local</Td>
        <Td>Categoria</Td>
        
        <Td >
            <Flex justifyContent='flex-end'>
            
            <Tooltip hasArrow label='Ver detalhes' bg='gray.300' color='black'>
            <Button  mr='10px'>
            <Icon icon="ic:outline-remove-red-eye" />
            </Button>
            </Tooltip>
           
            <Tooltip hasArrow label='Editar formulário' bg='gray.300' color='black'>
            <Button mr='10px'> <Icon icon="material-symbols:edit" /></Button>
            </Tooltip>
            <Tooltip hasArrow label='Excluir formulário' bg='gray.300' color='black'>
            <Button onClick={onOpen}><Icon icon="material-symbols:delete-outline"/></Button>
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Deletar Formulário
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja deletar o formulário?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        </>
    )
}
