import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
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
  useDisclosure,
} from '@chakra-ui/react';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import ButtonForm from '../button';

export default function Form(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
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
                    <FormLabel>
                      {props.labelUpdate ? item.label2 : item.label1}
                    </FormLabel>
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
              {props.select ? (
                <FormControl
                  mt="20px"
                  mb="20px"
                  justifyContent="space-around"
                  display="flex"
                  flexDir="column"
                  as="fieldset"
                  isDisabled={props.desabilitar ? habilitado : false}
                >
                  <FormLabel>Opção de plano:</FormLabel>
                  <Select placeholder="Select option">
                    {props.selectData.map((item) => (
                      <option value={item.value}>{item.opcao}</option>
                    ))}
                  </Select>
                </FormControl>
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

              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <FormControl
                  isDisabled={props.desabilitar ? habilitado : false}
                >
                  <FormLabel fontWeight="600">{props.textareaLabel}</FormLabel>
                  <Textarea placeholder={props.textareaPlaceholder} />
                </FormControl>
              </Flex>
              <Flex w="100%" justifyContent="center" gap="10px">
                {props.confirmaAlteracao ? (
                  <>
                    <ButtonForm
                      text="Confirmar"
                      funcao={teste}
                      onClick={onOpen}
                    />
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Customer
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You cant undo this action afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                ) : (
                  <ButtonForm text="Confirmar" funcao={teste} />
                )}

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
