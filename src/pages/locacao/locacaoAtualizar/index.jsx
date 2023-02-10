import FormLocacao from '../../../components/forms/formLocacao';

export default function LocacaoAtualizar() {
  return (
    <FormLocacao
      titulo="Detalhes Locação"
      podeAlterar
      desabilitar
      labelUpdate
      confirmaAlteracao
    />
  );
}
