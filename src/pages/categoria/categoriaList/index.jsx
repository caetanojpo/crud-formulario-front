import ListForms from '../../../components/list';

export default function CategoriaList() {
  const head = ['ID', 'DESCRIÇÃO'];
  const body = [
    {
      id: '1',
      descricao: 'Categoria A',
    },
  ];
  return (
    <ListForms
      title="Categorias"
      tableHead={head}
      tableRows={body}
      new="/categoria/criar"
      view="/categoria/atualizar"
    />
  );
}
