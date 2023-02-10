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
        titulo="Reunião"
        enderecoListagem="/reuniao"
        enderecoCriacao="/reuniao/criar"
      />
      <Dropdown
        titulo="Locacao"
        enderecoListagem="/locacao"
        enderecoCriacao="/locacao/criar"
      />
      <Dropdown
        titulo="Categoria"
        enderecoListagem="/categoria"
        enderecoCriacao="/categoria/criar"
      />
      <Dropdown
        titulo="Participante"
        enderecoListagem="/participante"
        enderecoCriacao="/participante/criar"
      />
      <Dropdown
        titulo="Plano"
        enderecoListagem="/plano"
        enderecoCriacao="/plano/criar"
      />
    </Flex>
  );
}
