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
import '../../../components/forms/style.css';
import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonForm from '../../../components/button';
import { Api } from '../../../api/api';
import Carregando from '../../../components/carregando';

export default function ReuniaoAtualizar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const url = useLocation();
  const navigate = useNavigate();

  const [habilitado, setHabilitado] = useState(true);
  const [conteudo, setConteudo] = useState(false);
  const [reuniao, setReuniao] = useState('');
  const [participanteReuniao, setParticipanteReuniao] = useState('');
  const [categorias, setCategorias] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [dadosReuniao, setDadosReuniao] = useState('');
  const [dadosParticipante, setDadosParticipante] = useState('');

  const alteraHabilitado = (e) => {
    e.preventDefault();
    setHabilitado((current) => !current);
  };

  const caminhoUrl = url.pathname.split('/');
  const reuniaoId = caminhoUrl.pop();

  useEffect(() => {
    if (!conteudo) {
      Promise.all([
        Api.getRequest(`/reuniao/${reuniaoId}`),
        Api.getRequest(`/participantePorReuniao/${reuniaoId}`),
        Api.getRequest('/participantes'),
        Api.getRequest('/categorias'),
      ]).then((response) => {
        const respostaReuniao = response.shift();
        const respostaParticipantePorReuniao = response.shift();
        const respostaParticipantes = response.shift();
        const respostaCategorias = response.shift();

        const participantePorReuniaoTratado =
          respostaParticipantePorReuniao.data.map((item) => {
            return item.participanteId;
          });

        const participantesTratados = respostaParticipantes.data.map((item) => {
          return { label: item.nome, value: item.id };
        });

        setReuniao(respostaReuniao.data);
        setParticipantes(participantesTratados);
        setCategorias(respostaCategorias.data);
        setParticipanteReuniao(participantePorReuniaoTratado);
        setConteudo(true);
      });
    }
  });

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

    dadosReuniao.categoriaId = parseInt(dadosReuniao.categoriaId);

    const reuniaoCriada = await Api.postRequest(url.pathname, dadosReuniao);

    const dadosCriacaoParticipantes = dadosParticipante.map((item) => {
      return { reuniaoId: reuniaoCriada.data.id, participanteId: item.value };
    });

    await Api.postRequest('/participanteReuniao', dadosCriacaoParticipantes);

    navigate('/reunioes');
  };

  if (!conteudo) {
    return <Carregando />;
  }

  const atualizadoEm = new Date(reuniao.updatedAt);
  const criadoEm = new Date(reuniao.updatedAt);

  var participantesSelecionados = [];

  participantes.map((item, index) => {
    participanteReuniao.map((elemento) => {
      if (item.value === elemento) {
        participantesSelecionados = [
          ...participantesSelecionados,
          participantes[index],
        ];
      }
    });
  });

  return (
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
            Detalhes da Reunião
          </Heading>
        </Box>
        <Box h="100%" textAlign="left">
          <form type="submit" style={{ height: '100%' }} onSubmit={enviarDados}>
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
                <FormLabel>Nome do visitante:</FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="100%"
                  type="text"
                  onChange={atualizarDadosReuniao}
                  id="visita"
                  name="visita"
                  defaultValue={reuniao.visita}
                />
              </FormControl>

              <FormControl
                display="flex"
                flexDir="column"
                isRequired
                gap="5px"
                isDisabled={habilitado}
              >
                <FormLabel>Data e horário da reunião:</FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="50%"
                  type="datetime-local"
                  onChange={atualizarDadosReuniao}
                  id="data"
                  name="data"
                  defaultValue={reuniao.data}
                />
              </FormControl>

              <FormControl
                display="flex"
                flexDir="column"
                isRequired
                gap="5px"
                isDisabled={habilitado}
              >
                <FormLabel>Local da reunião:</FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="100%"
                  type="text"
                  onChange={atualizarDadosReuniao}
                  id="local"
                  name="local"
                  defaultValue={reuniao.local}
                />
              </FormControl>

              <FormControl
                display="flex"
                flexDir="column"
                isRequired
                gap="5px"
                isDisabled={habilitado}
              >
                <FormLabel>
                  Informe a duração da reunião (horas/minutos):
                </FormLabel>
                <Input
                  outline="1px solid black !important"
                  border="1px solid black !important"
                  color="black"
                  h="30px"
                  w="50%"
                  type="time"
                  onChange={atualizarDadosReuniao}
                  id="duracao"
                  name="duracao"
                  defaultValue={reuniao.duracao}
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
              <FormLabel>Categoria da reunião:</FormLabel>

              <ChakraSelect
                id="categoriaId"
                name="categoriaId"
                onChange={atualizarDadosReuniao}
              >
                {categorias.map((item) => (
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
              isDisabled={habilitado}
            >
              <FormLabel>Participante(s) da reunião: </FormLabel>

              <Select
                id="participanteId"
                name="participanteId"
                isMulti
                MultiValue
                options={participantes}
                onChange={(item) => setDadosParticipante(item)}
                defaultValue={participantesSelecionados}
              />
            </FormControl>

            <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
              <FormControl isRequired isDisabled={habilitado}>
                <FormLabel fontWeight="600">Assunto da reunião:</FormLabel>
                <Textarea
                  id="assunto"
                  name="assunto"
                  onChange={atualizarDadosReuniao}
                  defaultValue={reuniao.assunto}
                />
              </FormControl>

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
                <ButtonForm text="Editar" funcao={alteraHabilitado} />
              </Flex>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
