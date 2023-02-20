/* eslint-disable radix */
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
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonForm from '../../../components/button';
import Carregando from '../../../components/carregando';
import { Api } from '../../../api/api';
import BotaoVoltarListagem from '../../../components/botaoVoltarListagem';

export default function LocacaoCriar() {
  const inputData = [
    {
      requerido: true,
      label: 'Digite o nome de quem está alugando:',
      largura: '100%',
      tipo: 'text',
      id: 'nome',
      name: 'nome',
      placeholder: 'Nome completo',
    },
    {
      requerido: true,
      label: 'Digite o telefone de quem está alugando:',
      largura: '100%',
      tipo: 'text',
      id: 'telefone',
      name: 'telefone',
      placeholder: '(XX)XXXX-XXXX',
    },
    {
      label: 'Digite o nome da organização:',
      largura: '100%',
      tipo: 'tel',
      id: 'organizacao',
      name: 'organizacao',
      placeholder: 'Empresa LTDA ME',
    },
    {
      requerido: true,
      label: 'Informe a data e horário da locação:',
      largura: '50%',
      id: 'data',
      name: 'data',
      tipo: 'datetime-local',
    },
  ];

  const url = useLocation();
  const navigate = useNavigate();

  const [dados, setDados] = useState('');
  const [selectData, setSelectData] = useState('');

  const buscarPlanos = async () => {
    const resposta = await Api.getRequest('/planos');
    setSelectData(resposta.data);
  };

  useEffect(() => {
    if (!selectData) {
      buscarPlanos();
    }
  });

  const atualizarDados = (event) => {
    setDados({
      ...dados,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    dados.planoId = parseInt(dados.planoId);

    await Api.postRequest(url.pathname, dados);

    navigate('/locacoes');
  };

  if (!selectData) {
    return <Carregando />;
  }

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
              Nova Locação
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
                {inputData.map((item, index) => (
                  <FormControl
                    key={`${item}${index}`}
                    display="flex"
                    flexDir="column"
                    isRequired={item.requerido ? true : false}
                    gap="5px"
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
                      onChange={atualizarDados}
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
              >
                <FormLabel>Selecione o plano da locação</FormLabel>

                <ChakraSelect
                  id="planoId"
                  name="planoId"
                  placeholder="Selecione uma opção"
                  onChange={atualizarDados}
                >
                  {selectData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.descricao}
                    </option>
                  ))}
                </ChakraSelect>
              </FormControl>

              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <FormControl>
                  <FormLabel fontWeight="600">Observação da locação:</FormLabel>
                  <Textarea
                    id="observacao"
                    name="observacao"
                    placeholder="Foi locado também a câmera"
                    onChange={atualizarDados}
                  />
                </FormControl>
              </Flex>

              <Flex w="100%" justifyContent="center" gap="10px">
                <ButtonForm text="Confirmar" />
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
