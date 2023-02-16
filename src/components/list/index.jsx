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

export default function TableFormulario(props) {
  return (
    <Flex w="100%" display="flex" justifyContent="center">
      <Flex
        padding="32px"
        fontFamily="gotham"
        flexDir="column"
        alignItems="space-between"
        w="fit-content"
        h="100%"
        color="white"
        gap="35px"
      >
        <Flex justifyContent="center">
          <Text fontSize="40px">{props.titulo}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Tooltip hasArrow label="Voltar" bg="gray.300" color="black">
            <Link to="/">
              <Button w="60px" bg="white">
                <Icon
                  color="black"
                  icon="material-symbols:arrow-back-rounded"
                  width="30"
                  height="30"
                />
              </Button>
            </Link>
          </Tooltip>
          <Tooltip
            hasArrow
            label={props.labelNovoRegistro}
            bg="gray.300"
            color="black"
          >
            <Link to={props.url}>
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
          <Table
            width="100%"
            variant="striped"
            colorScheme="green"
            color="black"
          >
            <TableCaption>Formulários das Reuniões</TableCaption>
            <Thead>
              <Tr>
                {props.tableCabecalho.map((item, index) => {
                  return <Th key={`TH${index}`}>{item}</Th>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {props.tableConteudo.map((item, index) => {
                return <TrForms key={index} conteudo={item} url={props.url} />;
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}
