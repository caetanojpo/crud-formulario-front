import Form from '../index';

export default function FormParticipante(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite o nome do participante:',
      label2: 'Nome',
      largura: '100%',
      tipo: 'text',
      id: 'nome',
      name: 'nome',
      placeholder: 'Nome completo',
    },
    {
      requerido: true,
      label1: 'Digite o e-mail do participante:',
      label2: 'E-Mail',
      largura: '100%',
      tipo: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'fulano@fomentavale.com.br',
    },
    {
      requerido: true,
      label1: 'Informe o cargo do participante:',
      label2: 'text',
      largura: '100%',
      tipo: 'text',
      id: 'cargo',
      name: 'cargo',
      placeholder: 'Gestor/Estagiário',
    },
  ];
  return (
    <Form
      titulo={props.titulo}
      inputData={inputData}
      alterar={props.podeAlterar ? true : false}
      desabilitar={props.desabilitar ? true : false}
      confirmaAlteracao={props.confirmaAlteracao}
      dadosRequisicao={props.dadosRequisicao}
    />
  );
}
