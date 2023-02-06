import { Box, Button, Flex, Link, Stack, Td, Tooltip, Tr } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function TdForms(props) {
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
            <Button><Icon icon="material-symbols:delete-outline"/></Button>
            </Tooltip>
            </Flex>
            
          
        </Td>
      </Tr>
        </>
    )
}
