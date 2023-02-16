import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Api } from '../../../api/api';
import Carregando from '../../../components/carregando';
import TableFormulario from '../../../components/list';

export default function CategoriaListar() {
  const cabecalho = ['ID', 'DESCRIÇÃO'];

  const url = useLocation();
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    if (!conteudo) {
      Api.getRequest('/categorias').then((response) => {
        setConteudo(response.data);
      });
    }
  });

  if (!conteudo) {
    return <Carregando />;
  }

  return (
    <TableFormulario
      titulo="Categorias"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      url="/categoria"
      labelNovoRegistro="Adicionar uma nova categoria"
    />
  );
}
