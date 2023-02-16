import Form from '../index';

const inputData = [
  {
    requerido: true,
    label1: 'Digite a descrição da categoria:',
    label2: 'Descrição da categoria',
    largura: '100%',
    tipo: 'text',
    id: 'descricao',
    name: 'descricao',
    placeholder: 'Educacional/Institucional...',
  },
];

export default function FormCategoria(props) {
  return (
    <Form
      titulo={props.titulo}
      inputData={inputData}
      textarea
      textareaLabel="Observações:"
      textareaPlaceholder="Digite aqui as informações extras sobre a categoria."
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
      dadosRequisicao={props.dadosRequisicao}
    />
  );
}
