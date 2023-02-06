import Form from "../../formulario";
import Inputs from "../../inputs";


function FormParticipante() {

	return (
		<Form
			titulo="Formulário do Participante"
			input={
			<>
				<Inputs
					label="Digite o nome do participante:"
					tipo="text"
					placeholder="Nome completo"
					errorMessage="Aguardando a digitação do nome"
					largura='100%'
					requerido
				/>
                <Inputs
					label="Digite o e-mail do participante:"
					tipo="email"
					placeholder="fulano@fomentavale.com.br"
					errorMessage="Aguardando a digitação do e-mail"
					largura='100%'
					requerido
				/>
                  <Inputs
					label="Digite o telefone do participante:"
					tipo="tel"
					placeholder="(XX) XXXXX-XXXX"
					errorMessage="Aguardando a digitação do telefone"
					largura='100%'
					requerido
				/>
                  <Inputs
					label="Informe o cargo do participante:"
					tipo="text"
					placeholder="Gestor/Estagiário"
					errorMessage="Necessário informar um cargo"
					largura='100%'
					requerido
				/>
			</>
			}
            textareaLabel='Observações:'
            textareaPlaceholder="Digite aqui as informações extras sobre o participante."
		/>
	)
}

export default FormParticipante;