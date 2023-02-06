import { Box, Button, Flex, Link, Stack, Td, Tr } from "@chakra-ui/react";
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

            <Button  mr='10px'>
            <Icon icon="ic:outline-remove-red-eye" />
            </Button>
            <Button mr='10px'> <Icon icon="material-symbols:edit" /></Button>
            <Button><Icon icon="material-symbols:delete-outline"/></Button>
            </Flex>
          
        </Td>
      </Tr>
        </>
    )
}
