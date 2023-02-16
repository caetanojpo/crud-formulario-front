import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api } from '../../../api/api';
import TableFormulario from '../../../components/list';
import Carregando from '../../../components/carregando';

export default function LocacaoListar() {
  const cabecalho = ['ID', 'NOME', 'TELEFONE', 'ORGANIZAÇÃO', 'DATA', 'PLANO'];

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
      titulo="Locação"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/locacao/criar"
      caminhoDetalheRegistro="/locacao/atualizar"
      labelNovoRegistro="Adicionar uma nova locação"
    />
  );
}
