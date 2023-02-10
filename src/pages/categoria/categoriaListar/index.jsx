import ListForms from '../../../components/list';

export default function CategoriaListar() {
  const cabecalho = ['ID', 'DESCRIÇÃO'];
  const conteudo = [
    {
      id: '1',
      descricao: 'Categoria A',
    },
  ];
  return (
    <ListForms
      titulo="Categorias"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/categoria/criar"
      caminhoDetalheRegistro="/categoria/atualizar"
      labelNovoRegistro="Adicionar uma nova categoria"
    />
  );
}
