import FormPlanos from '../../../components/forms/formPlanos';

export default function PlanoAtualizar() {
  return (
    <FormPlanos
      titulo="Detalhes do Plano"
      podeAlterar
      desabilitar
      labelUpdate
      confirmaAlteracao
    />
  );
}
