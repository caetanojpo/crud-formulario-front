import { Button } from '@chakra-ui/button';

export default function ButtonForm(props) {
  return (
    <Button
      cursor="pointer"
      type="submit"
      width="200px"
      border="1px solid black"
      borderRadius="8px"
      padding="10px 0px"
      mt={4}
      onClick={props.funcao}
    >
      {props.text}
    </Button>
  );
}
