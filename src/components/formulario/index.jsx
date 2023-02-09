import {
  Box,
  Button,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ButtonForm from '../button';

export default function Form(props) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const [habilitado, setHabilitado] = useState(true);

  const alteraHabilitado = (e) => {
    e.preventDefault();
    setHabilitado((current) => !current);
  };

  useEffect(() => {}, [habilitado]);

  const teste = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Flex width="full" align="center" justifyContent="center">
        <Flex
          padding="32px"
          fontFamily="gotham"
          flexDir="column"
          w="500px"
          h="100%"
          bg="white"
          justifyContent="space-around"
          color="black"
          borderRadius="8px"
          borderColor="black"
          margin="50px 0px"
        >
          <Box textAlign="center" padding="32px">
            <Heading fontSize="32px" fontFamily="gotham" fontWeight="600">
              {props.titulo}
            </Heading>
          </Box>
          <Box h="100%" textAlign="left">
            <form type="submit" style={{ height: '100%' }}>
              <Flex
                flexDir="column"
                justifyContent="space-around"
                h="fit-content"
                gap="20px"
              >
                {props.inputData.map((item) => (
                  <FormControl
                    display="flex"
                    flexDir="column"
                    isRequired={item.requerido ? true : false}
                    gap="5px"
                    isDisabled={props.desabilitar ? habilitado : false}
                  >
                    <FormLabel>{item.label}</FormLabel>
                    <Input
                      outline="1px solid black !important"
                      border="1px solid black !important"
                      color="black"
                      h="30px"
                      w={item.largura}
                      type={item.tipo}
                      placeholder={item.placeholder}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                ))}
              </Flex>
              <FormControl
                mt="20px"
                mb="20px"
                gap="20px"
                justifyContent="space-around"
                display="flex"
                flexDir="column"
                as="fieldset"
                isDisabled={props.desabilitar ? habilitado : false}
              >
                {props.select ? (
                  <Select placeholder="Select option">{props.selectbox}</Select>
                ) : (
                  ''
                )}
                {props.radio ? (
                  <>
                    <FormLabel mb="10px" as="legend">
                      {props.labelRadio}{' '}
                    </FormLabel>
                    <RadioGroup
                      defaultValue={props.default}
                      direction="row"
                      w="100%"
                    >
                      <Stack
                        w="100%"
                        spacing={5}
                        direction="column"
                        justifyContent="flex-start"
                      >
                        {props.radiobox}
                      </Stack>
                    </RadioGroup>
                  </>
                ) : (
                  ''
                )}

                {props.check ? (
                  <>
                    <FormLabel mb="10px" as="legend">
                      {props.labelCheck}{' '}
                    </FormLabel>
                    <CheckboxGroup defaultValue={props.default} direction="row">
                      <Stack
                        w="100%"
                        spacing={5}
                        direction="column"
                        justifyContent="flex-start"
                      >
                        {props.checkbox}
                      </Stack>
                    </CheckboxGroup>
                  </>
                ) : (
                  ''
                )}
              </FormControl>
              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <Text fontWeight="600">{props.textareaLabel}</Text>
                <Textarea placeholder={props.textareaPlaceholder} />
              </Flex>
              <Flex w="100%" justifyContent="center" gap="10px">
                <ButtonForm text="Confirmar" funcao={teste} />
                {props.alterar ? (
                  <ButtonForm text="Editar" funcao={alteraHabilitado} />
                ) : (
                  ''
                )}
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
