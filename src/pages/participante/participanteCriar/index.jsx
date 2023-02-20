import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../../api/api';
import ButtonForm from '../../../components/button';
import BotaoVoltarListagem from '../../../components/botaoVoltarListagem';

export default function ParticipanteCriar() {
  const navigate = useNavigate();

  const [dados, setDados] = useState('');

  const atualizarDados = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    await Api.postRequest('/participante', dados);

    navigate('/participantes');
  };

  return (
    <>
      <BotaoVoltarListagem url="/participantes" />
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
              Novo Participante
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
                >
                  <FormLabel>Digite o nome do participante:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={atualizarDados}
                    placeholder="Nome completo"
                  />

                  <FormLabel>Digite o e-mail do participante:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="email"
                    id="email"
                    name="email"
                    onChange={atualizarDados}
                    placeholder="lucas@fomentavale.com.br"
                  />
                  <FormLabel>Informe o cargo do participante:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    id="cargo"
                    name="cargo"
                    onChange={atualizarDados}
                    placeholder="Gestor/Estagiário"
                  />
                </FormControl>

                <Flex w="100%" justifyContent="center" gap="10px">
                  <ButtonForm text="Confirmar" onClick={enviarDados} />
                </Flex>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
