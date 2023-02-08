import { Flex } from '@chakra-ui/react';
import Dropdown from './dropdown';

export function Navbar() {
  return (
    <Flex justifyContent="space-evenly" height="50px;" bg="#00A99D">
      <Flex>Fomenta</Flex>
      <Dropdown
        title="Reunião"
        listPath="/reuniao"
        createPath="/reuniao/criar"
      />
      <Dropdown
        title="Coworking"
        listPath="/coworking"
        createPath="/coworking/criar"
      />
      <Dropdown
        title="Categoria"
        listPath="/categoria"
        createPath="/categoria/criar"
      />
      <Dropdown
        title="Participante"
        listPath="/participante"
        createPath="/participante/criar"
      />
      <Dropdown title="Plano" listPath="/plano" createPath="/plano/criar" />
    </Flex>
  );
}
