import Form from '../index';

export default function FormReuniao(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite o nome do visitante:',
      label2: 'Nome',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Nome completo',
    },
    {
      requerido: true,
      label1: 'Informe a data e horário da locação:',
      label2: 'Data e horário',
      largura: '50%',
      tipo: 'datetime-local',
    },
    {
      requerido: true,
      label1: 'Digite o local onde ocorreu a reunião:',
      label2: 'Local da reunião',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Sala de reunião, FEMA, sala de podcast...',
    },
    {
      requerido: true,
      label1: 'Informe a duração da reunião (horas/minutos):',
      label2: 'Nome',
      largura: '40%',
      tipo: 'time',
      placeholder: '',
    },
  ];

  const checkData = [
    {
      text: 'almir',
    },
    {
      text: 'dani',
    },
    {
      text: 'rodriguedes',
    },
    {
      text: 'jp',
    },
    {
      text: 'kelvin',
    },
    {
      text: 'nicolas',
    },
    {
      text: 'lucas',
    },
    {
      text: 'gui',
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
      titulo="Nova Reunião"
      inputData={inputData}
      labelCheck="Selecione o(s) participante(s) da reunião: "
      check
      checkData={checkData}
      select
      selectData={selectData}
      labelRadio="Selecione a categoria da reunião:"
      textareaLabel="Qual foi o assunto da reunião?"
      textareaPlaceholder="Digite o assunto da reunião..."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
      labelSelect="Categoria:"
      required
    />
  );
}
