import TableFormulario from '../../../components/list';

export default function LocacaoListar() {
  const cabecalho = ['ID', 'NOME', 'TELEFONE', 'ORGANIZAÇÃO', 'DATA', 'PLANO'];
  const conteudo = [
    {
      id: '1',
      nome: 'Rodrigo',
      telefone: '18997470599',
      organizacao: 'Fomenta',
      data: '20/02/2023',
      plano: 'Sala Podcast 8h',
    },
  ];
  return (
    <TableFormulario
      titulo="Locação"
      tableCabecalho={cabecalho}
      tableConteudo={conteudo}
      caminhoNovoRegistro="/locacao/criar"
      caminhoDetalheRegistro="/locacao/atualizar"
      labelNovoRegistro="Adicionar uma nova locação"
    />
  );
}
