import Form from '../../formulario';
import Inputs from '../../inputs';
import RadioOptions from '../../radiobox';
import SelectOptions from '../../select';

export default function FormCoworking(props) {
  return (
    <Form
      titulo="Formulário Coworking"
      input={
        <>
          <Inputs
            label="Digite o nome de quem está alugando:"
            tipo="text"
            placeholder="Nome completo"
            errorMessage="O nome ainda não foi digitado"
            largura="100%"
            requerido
          />
          <Inputs
            label="Digite o telefone de quem está alugando:"
            tipo="tel"
            largura="100%"
            placeholder="(XX)XXXX-XXXX"
            errorMessage="O telefone ainda não foi digitado"
            requerido
          />
          <Inputs
            label="Digite o nome da organização:"
            tipo="text"
            largura="100%"
            placeholder="Empresa LTDA ME"
          />
          <Inputs
            label="Informe a data e horário da locação:"
            largura="40%"
            tipo="datetime-local"
            requerido
          />
        </>
      }
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
      alterar={props.podeAlterar ? true : false}
      textareaLabel="Observações:"
      textareaPlaceholder="Digite as observações referente a locação..."
    />
  );
}
