import Form from '../../formulario';

export default function FormParticipante(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite o nome do participante:',
      label2: 'Nome',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Nome completo',
    },
    {
      requerido: true,
      label1: 'Digite o e-mail do participante:',
      label2: 'E-Mail',
      largura: '100%',
      tipo: 'email',
      placeholder: 'fulano@fomentavale.com.br',
    },
    {
      requerido: true,
      label1: 'Digite o telefone do participante:',
      label2: 'tel',
      largura: '100%',
      tipo: 'email',
      placeholder: '(XX) XXXXX-XXXX',
    },
    {
      requerido: true,
      label1: 'Informe o cargo do participante:',
      label2: 'text',
      largura: '100%',
      tipo: 'email',
      placeholder: 'Gestor/Estagiário',
    },
  ];
  return (
    <Form
      titulo="Formulário do Participante"
      inputData={inputData}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite aqui as informações extras sobre o participante."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
    />
  );
}
