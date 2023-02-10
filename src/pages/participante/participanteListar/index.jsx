import TableFormulario from '../../../components/list';

export default function ParticipanteListar() {
  const cabecalho = ['ID', 'NOME', 'EMAIL', 'CARGO'];
  const conteudo = [
    {
      id: '1',
      nome: 'Almir',
      email: 'contato@fomentavale.com.br',
      cargo: 'Gestor',
    },
  ];
  return (
    <TableFormulario
      titulo="Participantes"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/participante/criar"
      caminhoDetalheRegistro="/participante/atualizar"
      labelNovoRegistro="Adicionar um novo participante"
    />
  );
}
