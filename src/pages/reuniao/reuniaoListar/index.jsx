/* eslint-disable no-param-reassign */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api } from '../../../api/api';
import TableFormulario from '../../../components/list';
import Carregando from '../../../components/carregando';

export default function ReuniaoListar() {
  const cabecalho = [
    'ID',
    'CATEGORIA',
    'NOME',
    'DATA E HORÁRIO',
    'LOCAL REUNIÃO',
    'PARTICIPANTES',
  ];

  const url = useLocation();
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    if (!conteudo) {
      Api.getRequest(url.pathname).then((response) => {
        setConteudo(response.data);
      });
    }
  });

  if (!conteudo) {
    return <Carregando />;
  }

  return (
    <TableFormulario
      titulo="Reuniões"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/reuniao/criar"
      caminhoDetalheRegistro="/reuniao/atualizar"
      labelNovoRegistro="Adicionar uma nova reunião"
    />
  );
}
