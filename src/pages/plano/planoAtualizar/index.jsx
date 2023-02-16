import FormAtualizarCP from '../../../components/forms/formAtualizarCP';

export default function PlanoAtualizar() {
  return (
    <FormAtualizarCP
      titulo="Detalhes do Plano"
      labelInput="Descrição do plano: "
      voltar="/planos"
    />
  );
}
