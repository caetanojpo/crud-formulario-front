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
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import '../../../components/forms/style.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonForm from '../../../components/button';
import { Api } from '../../../api/api';
import Carregando from '../../../components/carregando';

export default function FormAtualizarCP(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();
  const url = useLocation();

  const [dados, setDados] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [habilitado, setHabilitado] = useState(true);

  const alteraHabilitado = (e) => {
    e.preventDefault();
    setHabilitado((current) => !current);
  };

  useEffect(() => {}, [habilitado]);

  useEffect(() => {
    if (!conteudo) {
      Api.getRequest(url.pathname).then((response) => {
        setConteudo(response.data);
      });
    }
  });

  const abrirAlerta = (e) => {
    e.preventDefault();
    onOpen();
  };

  const atualizarDados = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const atualizarValores = async (e) => {
    e.preventDefault();

    await Api.putRequest(url.pathname, dados);

    navigate('/participantes');
  };

  if (!conteudo) {
    return <Carregando />;
  }

  const atualizadoEm = new Date(conteudo.updatedAt);
  const criadoEm = new Date(conteudo.updatedAt);

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
              Detalhes do Participante
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
                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                  isDisabled={habilitado}
                >
                  <FormLabel>Nome do participante</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    id="nome"
                    name="nome"
                    defaultValue={conteudo.nome}
                    onChange={atualizarDados}
                  />

                  <FormLabel>E-mail do participante</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={conteudo.email}
                    onChange={atualizarDados}
                  />

                  <FormLabel>Cargo do participante</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    id="cargo"
                    name="cargo"
                    defaultValue={conteudo.cargo}
                    onChange={atualizarDados}
                  />
                </FormControl>

                <FormControl
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                >
                  <FormLabel fontWeight="600">Atualizado em:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="57%"
                    type="text"
                    readOnly
                    placeholder={atualizadoEm}
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
                    placeholder={criadoEm}
                  />
                </FormControl>
              </Flex>

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
                          <Button
                            colorScheme="green"
                            onClick={atualizarValores}
                          >
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
