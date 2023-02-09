import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import {
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import TrForms from './tr/trForms';

export default function ListForms(props) {
  return (
    <>
      <Flex
        padding="32px"
        fontFamily="gotham"
        flexDir="column"
        w="full"
        h="100%"
        justifyContent="flex-start"
        color="white"
        gap="10px"
      >
        <Flex justifyContent="center">
          <Text fontSize="40px">{props.title}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Tooltip hasArrow label="Voltar" bg="gray.300" color="black">
            <Button w="60px" bg="white">
              <Icon
                color="black"
                icon="material-symbols:arrow-back-rounded"
                width="30"
                height="30"
              />
            </Button>
          </Tooltip>
          <Tooltip
            hasArrow
            label="Adicione um novo registro"
            bg="gray.300"
            color="black"
          >
            <Link to={props.new}>
              <Button w="60px" bg="white">
                <Icon
                  color="black"
                  icon="material-symbols:new-window"
                  width="30"
                  height="30"
                />
              </Button>
            </Link>
          </Tooltip>
        </Flex>

        <TableContainer borderRadius="8px" bg="white">
          <Table variant="striped" colorScheme="green" color="black">
            <TableCaption>Formulários das Reuniões</TableCaption>
            <Thead>
              <Tr>
                {props.tableHead.map((item) => {
                  return <Th>{item}</Th>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {props.tableRows.map((item) => {
                return <TrForms body={item} view={props.view} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
