import Form from '../../formulario';

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
  const radioData = [
    {
      text: 'categoria A',
      value: 1,
    },
    {
      text: 'categoria B',
      value: 2,
    },
    {
      text: 'categoria C',
      value: 3,
    },
    {
      text: 'categoria D',
      value: 4,
    },
  ];
  return (
    <Form
      titulo="Nova Reunião"
      inputData={inputData}
      labelCheck="Selecione o(s) participante(s) da reunião: "
      check
      checkData={checkData}
      radio
      labelRadio="Selecione a categoria da reunião:"
      radioData={radioData}
      textareaLabel="Qual foi o assunto da reunião?"
      textareaPlaceholder="Digite o assunto da reunião..."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
    />
  );
}
