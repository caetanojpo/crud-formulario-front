import ListForms from '../../../components/list';

export default function PlanoListar() {
  const cabecalho = ['ID', 'DESCRIÇÃO'];
  const conteudo = [
    {
      id: '1',
      descrição: 'Plano A',
    },
  ];
  return (
    <ListForms
      titulo="Participantes"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/plano/criar"
      caminhoDetalheRegistro="/plano/atualizar"
      labelNovoRegistro="Adicionar um novo plano"
    />
  );
}
