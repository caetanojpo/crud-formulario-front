import Form from '../../formulario';
import SelectOptions from '../../select';

export default function FormCoworking(props) {
  const inputData = [
    {
      requerido: true,
      label: 'Digite o nome de quem está alugando:',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Nome completo',
      errorMessage: 'O nome ainda não foi digitado',
    },
    {
      requerido: true,
      label: 'Digite o telefone de quem está alugando:',
      largura: '100%',
      tipo: 'text',
      placeholder: '(XX)XXXX-XXXX',
      errorMessage: 'O telefone ainda não foi digitado',
    },
    {
      label: 'Digite o nome da organização:',
      largura: '100%',
      tipo: 'tel',
      placeholder: 'Empresa LTDA ME',
    },
    {
      requerido: true,
      label: 'Informe a data e horário da locação:',
      largura: '40%',
      tipo: 'datetime-local',
    },
  ];
  return (
    <Form
      titulo="Formulário Coworking"
      inputData={inputData}
      labelRadio="Selecione o plano desejado: "
      select
      selectbox={
        <>
          <SelectOptions opcao="Coworking - Diário - 4 horas" value="1" />
          <SelectOptions opcao="Coworking - Diário - 8 horas" value="2" />
          <SelectOptions opcao="Coworking - Mensal - 4 horas" value="3" />
          <SelectOptions opcao="Coworking - Mensal - 8 horas" value="4" />
          <SelectOptions opcao="Sala de Reunião - 4 horas" value="5" />
          <SelectOptions opcao="Sala de Reunião - 8 horas" value="6" />
          <SelectOptions opcao="Sala de Podcast - 2 horas" value="7" />
          <SelectOptions opcao="Sala de Podcast - 4 horas" value="8" />
          <SelectOptions opcao="Sala de Podcast - 6 horas" value="9" />
        </>
      }
      alterar={props.podeAlterar ? [true, false] : [false]}
      desabilitar={props.desabilitar ? true : false}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite as observações referente a locação..."
    />
  );
}
