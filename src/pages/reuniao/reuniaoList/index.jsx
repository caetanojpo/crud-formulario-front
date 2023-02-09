import ListForms from '../../../components/list';

export default function ReuniaoList() {
  const head = [
    'ID',
    'NOME',
    'TELEFONE',
    'DATA E HORÁRIO',
    'LOCAL REUNIÃO',
    'PARTICIPANTES',
    'CATEGORIA',
  ];
  const body = [
    {
      id: '1',
      nome: 'Visitante',
      telefone: '(18)99999-9999',
      data: '20/02/2023 16h30min00seg',
      local: 'Sala Reunião',
      participante: 'Almir',
      categoria: 'Categoria A',
    },
  ];
  return (
    <ListForms
      title="Reuniões"
      tableHead={head}
      tableRows={body}
      new="/reuniao/criar"
      view="/reuniao/atualizar"
    />
  );
}
