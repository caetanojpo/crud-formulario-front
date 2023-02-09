import ListForms from '../../../components/list';

export default function PlanoList() {
  const head = ['ID', 'DESCRIÇÃO'];
  const body = [
    {
      id: '1',
      descrição: 'Plano A',
    },
  ];
  return (
    <ListForms
      title="Participantes"
      tableHead={head}
      tableRows={body}
      new="/plano/criar"
      view="/plano/atualizar"
    />
  );
}
