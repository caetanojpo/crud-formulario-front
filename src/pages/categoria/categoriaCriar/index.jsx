import FormCriarCP from '../../../components/forms/formCriarCP';

const informacoes = {
  titulo: 'Nova Categoria',
  labelDescricao: 'Digite a descrição da categoria: ',
  placeholderDescricao: 'Educacional/Institucional...',
  placeholderObservacao: 'Digite aqui as informações extras sobre a categoria.',
  enderecoListagem: '/categorias',
};

export default function CategoriaCriar() {
  return <FormCriarCP informacoes={informacoes} />;
}
