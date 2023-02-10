import { Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Dropdown({
  titulo,
  enderecoListagem,
  enderecoCriacao,
}) {
  return (
    <Menu>
      <MenuButton>
        <Text fontWeight="500" fontSize="18px" color="#ffff">
          {titulo}
        </Text>
      </MenuButton>
      <MenuList>
        <Link to={enderecoListagem}>
          <MenuItem>Listar</MenuItem>
        </Link>
        <Link to={enderecoCriacao}>
          <MenuItem>Criar</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
