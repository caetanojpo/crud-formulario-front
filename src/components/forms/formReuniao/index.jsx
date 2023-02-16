import { useEffect, useState } from 'react';
import { Api } from '../../../api/api';
import Carregando from '../../carregando';
import Form from '../index';
import FormReunioes from '../teste';

export default function FormReuniao(props) {
  const inputData = [
    {
      requerido: true,
      label1: 'Digite o nome do visitante:',
      label2: 'Nome',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Nome completo',
      id: 'visita',
      name: 'visita',
    },
    {
      requerido: true,
      label1: 'Informe a data e horário da reunião:',
      label2: 'Data e horário',
      largura: '50%',
      tipo: 'datetime-local',
      id: 'data',
      name: 'data',
    },
    {
      requerido: true,
      label1: 'Digite o local onde ocorreu a reunião:',
      label2: 'Local da reunião',
      largura: '100%',
      tipo: 'text',
      placeholder: 'Sala de reunião, FEMA, sala de podcast...',
      id: 'local',
      name: 'local',
    },
    {
      requerido: true,
      label1: 'Informe a duração da reunião (horas/minutos):',
      label2: 'Nome',
      largura: '40%',
      tipo: 'time',
      placeholder: '',
      id: 'duracao',
      name: 'duracao',
    },
  ];

  const [conteudo, setConteudo] = useState(false);
  const [multiData, setMultiData] = useState('');
  const [selectData, setSelectData] = useState('');

  useEffect(() => {
    if (!conteudo) {
      Promise.all([
        Api.getRequest('/participantes'),
        Api.getRequest('/categorias'),
      ]).then((response) => {
        const participantes = response.shift();
        const categorias = response.shift();

        const participantesTratados = participantes.data.map((item) => {
          return { label: item.nome, value: item.id };
        });

        setMultiData(participantesTratados);
        setSelectData(categorias.data);
        setConteudo(true);
      });
    }
  });

  if (!conteudo) {
    return <Carregando />;
  }

  return (
    <>
      {/* <Form
        titulo="Nova Reunião"
        inputData={inputData}
        labelMulti="Selecione o(s) participante(s) da reunião: "
        multiData={multiData}
        multiSelect
        select
        selectData={selectData}
        labelSelect="Selecione a categoria da reunião:"
        idSelect="categoriaId"
        textarea
        textareaId="assunto"
        textareaLabel="Qual foi o assunto da reunião?"
        textareaPlaceholder="Digite o assunto da reunião..."
        alterar={props.podeAlterar ? true : false}
        desabilitar={props.desabilitar ? true : false}
        confirmaAlteracao={props.confirmaAlteracao}
        required
        dadosRequisicao={props.dadosRequisicao}
      /> */}

      <FormReunioes
        titulo="Nova Reunião"
        inputData={inputData}
        labelMulti="Selecione o(s) participante(s) da reunião: "
        multiData={multiData}
        multiSelect
        select
        selectData={selectData}
        labelSelect="Selecione a categoria da reunião:"
        idSelect="categoriaId"
        textarea
        textareaId="assunto"
        textareaLabel="Qual foi o assunto da reunião?"
        textareaPlaceholder="Digite o assunto da reunião..."
        alterar={props.podeAlterar ? true : false}
        desabilitar={props.desabilitar ? true : false}
        confirmaAlteracao={props.confirmaAlteracao}
        required
        dadosRequisicao={props.dadosRequisicao}
      />
    </>
  );
}
