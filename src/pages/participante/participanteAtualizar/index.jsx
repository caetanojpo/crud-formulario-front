import FormParticipante from '../../../components/forms/formParticipante';

export default function ParticipanteAtualizar() {
  return (
    <FormParticipante
      titulo="Detalhes do Participante"
      podeAlterar
      desabilitar
      labelUpdate
      confirmaAlteracao
    />
  );
}
