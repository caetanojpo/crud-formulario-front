import ListForms from '../../../components/list';

export default function ReuniaoListar() {
  const cabecalho = [
    'ID',
    'CATEGORIA',
    'NOME',
    'DATA E HORÁRIO',
    'LOCAL REUNIÃO',
    'PARTICIPANTES',
  ];
  const conteudo = [
    {
      id: '1',
      categoria: 'Fomenta',
      nome: 'Eddie Nomads',
      data: '20/02/2023 - 16h30m',
      local: 'Sala Reunião',
      participante: 'Almir, Kelvin, Dany, JP, Rodrigo, Lucas, Gui, Nicolas',
    },
  ];
  return (
    <ListForms
      titulo="Reuniões"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/reuniao/criar"
      caminhoDetalheRegistro="/reuniao/atualizar"
      labelNovoRegistro="Adicionar uma nova reunião"
    />
  );
}
