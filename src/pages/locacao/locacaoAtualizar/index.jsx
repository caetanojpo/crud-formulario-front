/* eslint-disable consistent-return */
/* eslint-disable radix */
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Flex,
  useDisclosure,
  Button,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialog,
} from '@chakra-ui/react';
import '../../../components/forms/style.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import ButtonForm from '../../../components/button';
import Carregando from '../../../components/carregando';
import { Api } from '../../../api/api';
import BotaoVoltarListagem from '../../../components/botaoVoltarListagem';

export default function LocacaoAtualizar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const url = useLocation();
  const navigate = useNavigate();
  let indicePlano;

  const [dados, setDados] = useState('');
  const [locacao, setLocacao] = useState('');
  const [selectData, setSelectData] = useState('');
  const [habilitado, setHabilitado] = useState(true);

  const buscarLocacao = async () => {
    const resposta = await Api.getRequest(url.pathname);
    setLocacao(resposta.data);
  };

  const buscarPlanos = async () => {
    const resposta = await Api.getRequest('/planos');
    const respostaTratada = resposta.data.map((item) => {
      return { label: item.descricao, value: item.id };
    });
    setSelectData(respostaTratada);
  };

  const alteraHabilitado = async (e) => {
    e.preventDefault();
    setHabilitado((current) => !current);
  };

  useEffect(() => {
    if (!locacao) {
      buscarLocacao();
    }

    if (!selectData) {
      buscarPlanos();
    }
  });

  useEffect(() => {}, [habilitado]);

  const abrirAlerta = (e) => {
    e.preventDefault();
    onOpen();
  };

  const atualizarDados = (event) => {
    if (event.target === undefined) {
      return setDados({
        ...dados,
        planoId: event.value,
      });
    }
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    await Api.putRequest(url.pathname, dados);

    navigate('/locacoes');
  };

  if (selectData && locacao) {
    selectData.forEach((item, index) => {
      if (locacao.planoId === item.value) {
        indicePlano = index;
      }
    });
  } else {
    return <Carregando />;
  }

  const atualizadoEm = new Date(locacao.updatedAt);
  const criadoEm = new Date(locacao.updatedAt);

  return (
    <>
      <BotaoVoltarListagem url="/locacoes" />
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
          margin="20px 0px"
        >
          <Box textAlign="center" padding="32px">
            <Heading fontSize="32px" fontFamily="gotham" fontWeight="600">
              Detalhes da Locação
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
                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                  isDisabled={habilitado}
                >
                  <FormLabel>Nome</FormLabel>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    placeholder="Nome completo"
                    onChange={atualizarDados}
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    defaultValue={locacao.nome}
                  />
                </FormControl>
                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                  isDisabled={habilitado}
                >
                  <FormLabel>Telefone</FormLabel>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="text"
                    placeholder="(XX)XXXX-XXXX"
                    onChange={atualizarDados}
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    defaultValue={locacao.telefone}
                  />
                </FormControl>
                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                  isDisabled={habilitado}
                >
                  <FormLabel>Nome da organização:</FormLabel>
                  <Input
                    id="organizacao"
                    name="organizacao"
                    type="text"
                    placeholder="Empresa LTDA ME"
                    onChange={atualizarDados}
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    defaultValue={locacao.organizacao}
                  />
                </FormControl>
                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                  isDisabled={habilitado}
                >
                  <FormLabel>Data e Horário da locação:</FormLabel>
                  <Input
                    id="data"
                    name="data"
                    type="text"
                    placeholder="(XX)XXXX-XXXX"
                    onChange={atualizarDados}
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="50%"
                    defaultValue={locacao.data}
                  />
                </FormControl>
              </Flex>

              <FormControl
                isRequired
                mt="20px"
                mb="20px"
                justifyContent="space-around"
                display="flex"
                flexDir="column"
                as="fieldset"
                isDisabled={habilitado}
              >
                <FormLabel>Plano Locado:</FormLabel>

                <Select
                  options={selectData}
                  defaultValue={selectData[indicePlano]}
                  onChange={atualizarDados}
                  isDisabled={habilitado}
                />
              </FormControl>

              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <FormControl isDisabled={habilitado}>
                  <FormLabel fontWeight="600">Observação da locação:</FormLabel>
                  <Textarea
                    id="observacao"
                    name="observacao"
                    placeholder="Foi locado também a câmera"
                    onChange={atualizarDados}
                    defaultValue={locacao.observacao}
                  />
                </FormControl>
              </Flex>

              <FormControl display="flex" flexDir="column" alignItems="center">
                <FormLabel fontWeight="600">Atualizado em:</FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="57%"
                  type="text"
                  readOnly
                  defaultValue={atualizadoEm}
                />
                <FormLabel fontWeight="600">Criado em:</FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="57%"
                  type="text"
                  readOnly
                  defaultValue={criadoEm}
                />
              </FormControl>

              <Flex w="100%" justifyContent="center" gap="10px">
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
                          Tem certeza que deseja realizar a alteração nos dados?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button colorScheme="green" onClick={enviarDados}>
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

                <ButtonForm text="Editar" funcao={alteraHabilitado} />
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
