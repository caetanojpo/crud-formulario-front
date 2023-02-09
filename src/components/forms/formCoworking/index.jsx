import Form from '../../formulario';

export default function FormCoworking(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite o nome de quem está alugando:',
      label2: 'Nome',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Nome completo',
    },
    {
      requerido: true,
      label1: 'Digite o telefone de quem está alugando:',
      label2: 'Telefone',
      largura: '100%',
      tipo: 'text',
      placeholder: '(XX)XXXX-XXXX',
    },
    {
      label1: 'Digite o nome da organização:',
      label2: 'Organização',
      largura: '100%',
      tipo: 'tel',
      placeholder: 'Empresa LTDA ME',
    },
    {
      requerido: true,
      label1: 'Informe a data e horário da locação:',
      label2: 'Data e horário da locação',
      largura: '40%',
      tipo: 'datetime-local',
    },
  ];

  const selectData = [
    {
      value: 1,
      opcao: 'Coworking - Diário - 4 horas',
    },
    {
      value: 2,
      opcao: 'Coworking - Diário - 8 horas',
    },
    {
      value: 3,
      opcao: 'Coworking - Mensal - 4 horas',
    },
    {
      value: 4,
      opcao: 'Coworking - Mensal - 8 horas',
    },
    {
      value: 5,
      opcao: 'Sala de Reunião - 4 horas',
    },
    {
      value: 6,
      opcao: 'Sala de Reunião - 8 horas',
    },
    {
      value: 7,
      opcao: 'Sala de Podcast - 2 horas',
    },
    {
      value: 8,
      opcao: 'Sala de Podcast - 4 horas',
    },
    {
      value: 9,
      opcao: 'Sala de Podcast - 6 horas',
    },
  ];
  return (
    <Form
      labelUpdate={props.labelUpdate}
      titulo="Formulário Coworking"
      inputData={inputData}
      select
      selectData={selectData}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite as observações referente a locação..."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
    />
  );
}
