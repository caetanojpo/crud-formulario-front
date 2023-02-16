import FormReuniao from '../../../components/forms/formReuniao';

const dadosRequisicao = {
  tipoRequisicao: 'criarReuniao',
  url: '/reuniao',
};

export default function ReuniaoCriar() {
  return <FormReuniao dadosRequisicao={dadosRequisicao} />;
}
