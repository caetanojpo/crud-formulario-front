import { Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Dropdown({ title, listPath, createPath }) {
  return (
    <Menu>
      <MenuButton>
        <Text fontWeight="500" fontSize="18px" color="#ffff">
          {title}
        </Text>
      </MenuButton>
      <MenuList>
        <Link to={listPath}>
          <MenuItem>Listar</MenuItem>
        </Link>
        <Link to={createPath}>
          <MenuItem>Criar</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
