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
        response.data.map((item) => {
          const { plano } = item;
          delete item.plano;
          delete item.observacao;
          item.descricao = plano.descricao;
        });
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
      url="/locacao"
      labelNovoRegistro="Adicionar uma nova locação"
    />
  );
}
