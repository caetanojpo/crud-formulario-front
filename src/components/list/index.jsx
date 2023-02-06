import { Button, Flex, ListItem, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, UnorderedList } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import TdForms from "./td/tdForms";

export default function ListForms() {
    return (
        <>
        <Flex padding='32px' fontFamily='gotham' flexDir='column' w='full' h='100vh' bg='#003b33' justifyContent='space-around' color='white' boxShadow='6px 6px 15px #c0cad4,
             -6px -6px 15px #f4ffff;'>

<TableContainer borderRadius='8px' bg='white'>
  <Table variant='striped' colorScheme='green' color='black'>
    <TableCaption>Formulários das Reuniões</TableCaption>
    <Thead > 
      <Tr>
        <Th>Formulários</Th>
        

        <Th>
       
            <Button>
            <Icon icon="material-symbols:new-window" />
            </Button>
         
        </Th>
        
       
      </Tr>
    </Thead>
    <Tbody >
      <TdForms
      rotaForms=''
      formsTitulo="Formulário Reunião 01/01/2001    "
      />
      <TdForms
      rotaForms=''
      formsTitulo="Formulário Reunião 01/01/2001    "
      />
      <TdForms
      rotaForms=''
      formsTitulo="Formulário Reunião 01/01/2001    "
      />
      
    </Tbody>
    
  </Table>
</TableContainer>
                

        </Flex>
            
        </>
    )
}