import { Flex, Spinner } from '@chakra-ui/react';

export default function Carregando() {
  return (
    <Flex
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner color="#ffff" width="100px" height="100px" />
    </Flex>
  );
}
