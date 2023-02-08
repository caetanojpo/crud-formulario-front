import { Checkbox } from '@chakra-ui/react';

export default function CheckOptions(props) {
  return (
    <>
      <Checkbox>{props.text}</Checkbox>
    </>
  );
}
