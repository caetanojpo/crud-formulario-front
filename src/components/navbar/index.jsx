import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';

export function Navbar() {
  return (
    <Flex justifyContent="space-evenly" height="70px;" bg="#00A99D">
      <Flex alignItems="center" justifyContent="center" className="logoNavbar">
        <Link to="/">
          <Text
            fontSize="24px"
            fontFamily="gotham"
            fontWeight="700"
            color="white"
          >
            FOMENTA VALE
          </Text>
        </Link>
      </Flex>

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
