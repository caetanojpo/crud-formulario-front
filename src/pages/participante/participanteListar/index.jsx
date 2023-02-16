import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TableFormulario from '../../../components/list';
import { Api } from '../../../api/api';
import Carregando from '../../../components/carregando';

export default function ParticipanteListar() {
  const cabecalho = ['ID', 'NOME', 'EMAIL', 'CARGO'];

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
      titulo="Participantes"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      url="/participante"
      labelNovoRegistro="Adicionar um novo participante"
    />
  );
}
