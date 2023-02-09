import ListForms from '../../../components/list';

export default function ParticipanteList() {
  const head = ['ID', 'NOME', 'EMAIL', 'TEL', 'CARGO'];
  const body = [
    {
      id: '1',
      nome: 'Almir',
      email: 'contato@fomentavale.com.br',
      tel: '(18)9999-9999',
      cargo: 'Gestor',
    },
  ];
  return (
    <ListForms
      title="Participantes"
      tableHead={head}
      tableRows={body}
      new="/participante/criar"
      view="/participante/atualizar"
    />
  );
}
