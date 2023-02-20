import { Button, Flex, Tooltip } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function BotaoVoltarListagem({ url }) {
  return (
    <Flex margin="20px">
      <Tooltip hasArrow label="Voltar" bg="gray.300" color="black">
        <Link to={url}>
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
    </Flex>
  );
}
