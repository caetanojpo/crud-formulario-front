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
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  Checkbox,
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

  const abrirAlerta = (e) => {
    e.preventDefault();
    onOpen();
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
          bg="#d8f7f3"
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
                  <FormLabel>Plano:</FormLabel>
                  <Select placeholder="Selecione uma opção">
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
                  <FormControl
                    mt="20px"
                    mb="20px"
                    justifyContent="space-around"
                    display="flex"
                    flexDir="column"
                    as="fieldset"
                    isDisabled={props.desabilitar ? habilitado : false}
                  >
                    <FormLabel mt="20px " mb="10px" as="legend">
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
                        {props.radioData.map((item) => (
                          <Radio
                            spacing="1rem"
                            iconColor="blue.400"
                            iconSize="1rem"
                            size="md"
                            value={item.value}
                          >
                            {item.text}
                          </Radio>
                        ))}
                      </Stack>
                    </RadioGroup>
                  </FormControl>
                </>
              ) : (
                ''
              )}

              {props.check ? (
                <>
                  <FormControl
                    mt="20px"
                    mb="20px"
                    justifyContent="space-around"
                    display="flex"
                    flexDir="column"
                    as="fieldset"
                    isDisabled={props.desabilitar ? habilitado : false}
                  >
                    <FormLabel mt="20px " mb="10px" as="legend">
                      {props.labelCheck}{' '}
                    </FormLabel>
                    <CheckboxGroup defaultValue={props.default} direction="row">
                      <Stack
                        w="100%"
                        spacing={5}
                        direction="column"
                        justifyContent="flex-start"
                      >
                        {props.checkData.map((item) => (
                          <Checkbox>{item.text}</Checkbox>
                        ))}
                      </Stack>
                    </CheckboxGroup>
                  </FormControl>
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
                    <ButtonForm text="Confirmar" funcao={abrirAlerta} />
                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Confirmar Alteração
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Tem certeza que deseja realizar a alteração nos
                            dados?
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button colorScheme="green" onClick={onClose}>
                              Confirmar
                            </Button>
                            <Button ref={cancelRef} onClick={onClose} ml={3}>
                              Cancelar
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                ) : (
                  <ButtonForm text="Confirmar" />
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
