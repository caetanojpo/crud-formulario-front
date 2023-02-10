import Form from '../index';

export default function FormPlanos(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite a descrição do plano:',
      label2: 'Descrição do plano',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Espaço - Diário/Mensal - Duração',
    },
  ];
  return (
    <Form
      titulo={props.titulo}
      inputData={inputData}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite aqui as observações do plano..."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
    />
  );
}
