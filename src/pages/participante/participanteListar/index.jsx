import ListForms from '../../../components/list';

export default function ParticipanteListar() {
  const cabecalho = ['ID', 'NOME', 'EMAIL', 'TEL', 'CARGO'];
  const conteudo = [
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
      titulo="Participantes"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/participante/criar"
      caminhoDetalheRegistro="/participante/atualizar"
      labelNovoRegistro="Adicionar um novo participante"
    />
  );
}
