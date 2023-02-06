import { Button, Flex, ListItem, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tooltip, Tr, UnorderedList } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import TdForms from "./td/tdForms";

export default function ListForms() {
  return (
    <>
      <Flex padding='32px' fontFamily='gotham' flexDir='column' w='full' h='100vh' bg='#003b33' justifyContent='center' color='white' gap='10px' boxShadow='6px 6px 15px #c0cad4,
             -6px -6px 15px #f4ffff;'>
        <Flex justifyContent='flex-end'>
        <Tooltip hasArrow label='Adicione um novo formulário' bg='gray.300' color='black'>
        <Button w='60px'bg='white'>
          <Icon color='black' icon="material-symbols:new-window" width="30" height="30" />
          </Button>
</Tooltip>
         
        </Flex>

        <TableContainer borderRadius='8px' bg='white'>
          <Table variant='striped' colorScheme='green' color='black'>
            <TableCaption>Formulários das Reuniões</TableCaption>
            <Thead >
              <Tr>
                <Th>Formulários</Th>



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