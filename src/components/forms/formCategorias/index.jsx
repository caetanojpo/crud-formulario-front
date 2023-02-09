import Form from '../../formulario';

const inputData = [
  {
    requerido: true,
    label1: 'Digite a descrição da categoria:',
    label2: 'Descrição da categoria',
    largura: '100%',
    tipo: 'text',
    placeholder: 'Educacional/Institucional...',
  },
];

export default function FormCategoria(props) {
  return (
    <Form
      titulo="Formulário do Categoria"
      inputData={inputData}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite aqui as informações extras sobre a categoria."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
    />
  );
}
