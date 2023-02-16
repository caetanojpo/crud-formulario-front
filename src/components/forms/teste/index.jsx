/* eslint-disable radix */
/* eslint-disable eqeqeq */
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select as ChakraSelect,
  Textarea,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import '../style.css';
import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import ButtonForm from '../../button';
import { Api } from '../../../api/api';

export default function FormReuniao(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [habilitado, setHabilitado] = useState(true);
  const [dadosReuniao, setDadosReuniao] = useState('');
  const [dadosParticipante, setDadosParticipante] = useState('');

  const alteraHabilitado = (e) => {
    e.preventDefault();
    setHabilitado((current) => !current);
  };

  useEffect(() => {}, [habilitado]);

  const abrirAlerta = (e) => {
    e.preventDefault();
    onOpen();
  };

  const atualizarDadosReuniao = (event) => {
    setDadosReuniao({
      ...dadosReuniao,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    const teste = new Date(dadosReuniao.data);
    console.log(teste);

    // dadosReuniao.categoriaId = parseInt(dadosReuniao.categoriaId);

    // const idParticipantes = dadosParticipante.map((item) => {
    //   return item.value;
    // });

    // const resposta = await Api.postRequest(
    //   props.dadosRequisicao.url,
    //   dadosReuniao
    // );

    // const dadosParticipantesReuniao = {
    //   reuniaoId: resposta.id,
    //   participanteId: idParticipantes,
    // };
    // await Api.postRequest('/participanteReuniao', dadosParticipantesReuniao);
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
            <form
              type="submit"
              style={{ height: '100%' }}
              onSubmit={enviarDados}
            >
              <Flex
                flexDir="column"
                justifyContent="space-around"
                h="fit-content"
                gap="20px"
              >
                {props.inputData.map((item, index) => (
                  <FormControl
                    key={`select${index}`}
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
                      onChange={atualizarDadosReuniao}
                      id={item.id}
                      name={item.name}
                    />
                  </FormControl>
                ))}
              </Flex>

              <FormControl
                isRequired
                mt="20px"
                mb="20px"
                justifyContent="space-around"
                display="flex"
                flexDir="column"
                as="fieldset"
                isDisabled={props.desabilitar ? habilitado : false}
              >
                <FormLabel>{props.labelSelect}</FormLabel>

                <ChakraSelect
                  id={props.idSelect}
                  name={props.idSelect}
                  placeholder="Selecione uma opção"
                  onChange={atualizarDadosReuniao}
                >
                  {props.selectData.map((item) => (
                    <option value={item.id}>{item.descricao}</option>
                  ))}
                </ChakraSelect>
              </FormControl>

              <FormControl
                isRequired
                mt="20px"
                mb="20px"
                justifyContent="space-around"
                display="flex"
                flexDir="column"
                as="fieldset"
                isDisabled={props.desabilitar ? habilitado : false}
              >
                <FormLabel>{props.labelMulti}</FormLabel>

                <Select
                  id="participanteId"
                  name="participanteId"
                  isMulti
                  MultiValue
                  options={props.multiData}
                  placeholder="Selecione..."
                  onChange={(item) => setDadosParticipante(item)}
                />
              </FormControl>

              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <FormControl
                  isRequired={props.required}
                  isDisabled={props.desabilitar ? habilitado : false}
                >
                  <FormLabel fontWeight="600">{props.textareaLabel}</FormLabel>
                  <Textarea
                    id={props.textareaId}
                    name={props.textareaId}
                    placeholder={props.textareaPlaceholder}
                    onChange={atualizarDadosReuniao}
                  />
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
