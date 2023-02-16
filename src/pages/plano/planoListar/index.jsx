import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api } from '../../../api/api';
import TableFormulario from '../../../components/list';
import Carregando from '../../../components/carregando';

export default function PlanoListar() {
  const cabecalho = ['ID', 'DESCRIÇÃO'];
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
      titulo="Planos"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      labelNovoRegistro="Adicionar um novo plano"
      url="/plano"
    />
  );
}
