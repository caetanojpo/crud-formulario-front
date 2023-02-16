import FormCriarCP from '../../../components/forms/formCriarCP';

const informacoes = {
  titulo: 'Novo Plano',
  labelDescricao: 'Digite a descrição do plano: ',
  placeholderDescricao: 'Educacional/Institucional...',
  placeholderObservacao: 'Digite aqui as informações extras sobre a categoria.',
};

export default function PlanoCriar() {
  return <FormCriarCP informacoes={informacoes} />;
}
