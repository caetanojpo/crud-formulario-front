import CheckOptions from "../../checkbox";
import Form from "../../formulario";
import Inputs from "../../inputs";
import RadioOptions from "../../radiobox";

function FormReuniao() {

	return (
		<Form
			titulo="Formulário Reunião"
			input={
			<>
				<Inputs
					label="Digite o nome do visitante:"
					tipo="text"
					placeholder="Nome completo"
					errorMessage="O nome ainda não foi digitado"
					largura='100%'
					requerido
				/>
				<Inputs
					label="Digite o telefone de quem está alugando:"
					tipo="tel"
					largura='100%'
					placeholder="(XX)XXXX-XXXX"
					errorMessage="O telefone ainda não foi digitado"
					requerido
				/>
				<Inputs
					label="Informe a data e horário da locação:"
					largura='40%'
					tipo="datetime-local"
					requerido
				/>
                <Inputs
					label="Digite o local onde ocorreu a reunião"
					tipo="text"
					largura='100%'
					placeholder="Sala de reunião, FEMA, sala de podcast..."
					errorMessage="Local ainda não informado"
					requerido
				/>
                <Inputs
					label="Informe a duração da reunião (horas/minutos):"
					tipo="time"
					largura='100%'
					placeholder=""
					requerido
				/>
			</>
			}
			labelCheck="Selecione o(s) participante(s) da reunião: "
			check
            checkbox={
                <>
                <CheckOptions
                text='almir'/>
                <CheckOptions
                text='dani'/>
                <CheckOptions
                text='rodriguedes'/>
                <CheckOptions
                text='jp'/>
                <CheckOptions
                text='kelvin'/>
                <CheckOptions
                text='nicolas'/>
                <CheckOptions
                text='lucas'/>
                <CheckOptions
                text='gui'/>
                </>
            }
            radio
            labelRadio='Selecione a categoria da reunião:'
            radiobox={
                <>
                <RadioOptions
                text="categoria A"
                value='1'
                />
                <RadioOptions
                text="categoria B"
                value='2'
                />
                <RadioOptions
                text="categoria C"
                value='3'
                />
                <RadioOptions
                text="categoria D"
                value='4'
                />
                </>
            }
            textareaLabel="Qual foi o assunto da reunião?"
			textareaPlaceholder="Digite o assunto da reunião..."
		/>
	)
}

export default FormReuniao;