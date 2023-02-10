import ListForms from '../../../components/list';

export default function CoworkingListar() {
  const cabecalho = ['ID', 'NOME', 'ORGANIZAÇÃO', 'DATA', 'PLANO'];
  const conteudo = [
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
      titulo="Coworking"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/coworking/criar"
      caminhoDetalheRegistro="/coworking/atualizar"
      labelNovoRegistro="Adicionar uma nova locação"
    />
  );
}
