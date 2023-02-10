import TableFormulario from '../../../components/list';

export default function PlanoListar() {
  const cabecalho = ['ID', 'DESCRIÇÃO'];
  const conteudo = [
    {
      id: '1',
      descrição: 'Plano A',
    },
  ];
  return (
    <TableFormulario
      titulo="Planos"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/plano/criar"
      caminhoDetalheRegistro="/plano/atualizar"
      labelNovoRegistro="Adicionar um novo plano"
    />
  );
}
