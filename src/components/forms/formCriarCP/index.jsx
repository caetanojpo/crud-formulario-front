import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import '../style.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Api } from '../../../api/api';
import ButtonForm from '../../button';

export default function FormCriarCP(props) {
  const navigate = useNavigate();
  const url = useLocation();

  const [dados, setDados] = useState('');

  const atualizarDados = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDados = async (e) => {
    e.preventDefault();

    await Api.postRequest(url.pathname, dados);

    navigate('/categorias');
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
              {props.informacoes.titulo}
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
                  <FormLabel>{props.informacoes.labelDescricao}</FormLabel>
                  <Input
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    color="black"
                    h="30px"
                    w="100%"
                    type="text"
                    id="descricao"
                    name="descricao"
                    placeholder={props.informacoes.placeholderDescricao}
                    onChange={atualizarDados}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontWeight="600">Observações:</FormLabel>
                  <Textarea
                    id="observacao"
                    name="observacao"
                    outline="1px solid black !important"
                    border="1px solid black !important"
                    placeholder={props.informacoes.placeholderObservacao}
                    onChange={atualizarDados}
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
