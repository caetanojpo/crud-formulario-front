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
        enderecoListagem="/reunioes"
        enderecoCriacao="/reuniao"
      />
      <Dropdown
        titulo="Locação"
        enderecoListagem="/locacoes"
        enderecoCriacao="/locacao"
      />
      <Dropdown
        titulo="Categoria"
        enderecoListagem="/categorias"
        enderecoCriacao="/categoria"
      />
      <Dropdown
        titulo="Participante"
        enderecoListagem="/participantes"
        enderecoCriacao="/participante"
      />
      <Dropdown
        titulo="Plano"
        enderecoListagem="/planos"
        enderecoCriacao="/plano"
      />
    </Flex>
  );
}
