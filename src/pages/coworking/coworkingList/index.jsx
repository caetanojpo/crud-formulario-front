import ListForms from '../../../components/list';

export default function CoworkingList() {
  const head = ['ID', 'NOME', 'ORGANIZAÇÃO', 'DATA', 'PLANO'];
  const body = [
    {
      id: '1',
      nome: 'Rodrigo',
      organizacao: 'Fomenta',
      data: '20/02/2023',
      plano: 'Sala Podcast 8h',
    },
  ];
  return (
    <ListForms
      title="Coworking"
      tableHead={head}
      tableRows={body}
      new="/coworking/novo"
    />
  );
}
