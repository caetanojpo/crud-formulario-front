import { Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Dropdown({
  titulo,
  enderecoListagem,
  enderecoCriacao,
}) {
  return (
    <Menu>
      <MenuButton>
        <Text display="flex" fontWeight="500" fontSize="18px" color="#ffff">
          {titulo}
          <Icon
            icon="material-symbols:arrow-drop-down-rounded"
            width="30"
            height="30"
          />
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
