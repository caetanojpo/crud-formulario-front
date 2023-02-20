import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select as ChakraSelect,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import '../../../components/forms/style.css';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import ButtonForm from '../../../components/button';
import { Api } from '../../../api/api';
import Carregando from '../../../components/carregando';
import BotaoVoltarListagem from '../../../components/botaoVoltarListagem';

export default function ReuniaoCriar() {
  const navigate = useNavigate();

  const [conteudo, setConteudo] = useState(false);
  const [categorias, setCategorias] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [dadosReuniao, setDadosReuniao] = useState('');
  const [dadosParticipante, setDadosParticipante] = useState('');

  useEffect(() => {
    if (!conteudo) {
      Promise.all([
        Api.getRequest('/participantes'),
        Api.getRequest('/categorias'),
      ]).then((response) => {
        const dadosParticipantes = response.shift();
        const dadosCategorias = response.shift();

        const participantesTratados = dadosParticipantes.data.map((item) => {
          return { label: item.nome, value: item.id };
        });

        setParticipantes(participantesTratados);
        setCategorias(dadosCategorias.data);
        setConteudo(true);
      });
    }
  });

  const atualizarDadosReuniao = (event) => {
    setDadosReuniao({
      ...dadosReuniao,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    dadosReuniao.categoriaId = parseInt(dadosReuniao.categoriaId);

    const reuniaoCriada = await Api.postRequest('/reuniao', dadosReuniao);

    const dadosCriacaoParticipantes = dadosParticipante.map((item) => {
      return { reuniaoId: reuniaoCriada.data.id, participanteId: item.value };
    });

    await Api.postRequest('/participanteReuniao', dadosCriacaoParticipantes);

    navigate('/reunioes');
  };

  if (!conteudo) {
    return <Carregando />;
  }

  return (
    <>
      <BotaoVoltarListagem url="/reunioes" />
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
              Nova Reunião
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
                  <FormLabel>Digite o nome do visitante:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    placeholder="Nome completo"
                    onChange={atualizarDadosReuniao}
                    id="visita"
                    name="visita"
                  />
                </FormControl>

                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                >
                  <FormLabel>Informe a data e horário da reunião:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="50%"
                    type="datetime-local"
                    placeholder="Nome completo"
                    onChange={atualizarDadosReuniao}
                    id="data"
                    name="data"
                  />
                </FormControl>

                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
                >
                  <FormLabel>Digite o local onde ocorreu a reunião:</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    placeholder="Sala de reunião, FEMA, sala de podcast..."
                    onChange={atualizarDadosReuniao}
                    id="local"
                    name="local"
                  />
                </FormControl>

                <FormControl
                  display="flex"
                  flexDir="column"
                  isRequired
                  gap="5px"
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
              >
                <FormLabel>Selecione a categoria da reunião:</FormLabel>

                <ChakraSelect
                  id="categoriaId"
                  name="categoriaId"
                  placeholder="Selecione uma opção"
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
              >
                <FormLabel>
                  Selecione o(s) participante(s) da reunião:{' '}
                </FormLabel>

                <Select
                  id="participanteId"
                  name="participanteId"
                  isMulti
                  MultiValue
                  options={participantes}
                  placeholder="Selecione..."
                  onChange={(item) => setDadosParticipante(item)}
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      backgroundColor: 'transparent',
                      borderColor: 'black',
                    }),
                  }}
                />
              </FormControl>

              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <FormControl isRequired>
                  <FormLabel fontWeight="600">
                    Qual foi o assunto da reunião?
                  </FormLabel>
                  <Textarea
                    id="assunto"
                    name="assunto"
                    placeholder="Digite o assunto da reunião..."
                    onChange={atualizarDadosReuniao}
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
