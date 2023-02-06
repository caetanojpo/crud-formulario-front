import Form from "../../formulario";
import Inputs from "../../inputs";


function FormPlanos() {

	return (
		<Form
			titulo="Formulário Planos"
			input={
			<>
				<Inputs
					label="Digite a descrição do plano:"
					tipo="text"
					placeholder="Espaço - Diário/Mensal - Duração"
					errorMessage="Aguardando a digitação"
					largura='100%'
					requerido
				/>
			</>
			}
            textareaLabel='Observações:'
            textareaPlaceholder="Digite aqui as observações do plano..."
		/>
	)
}

export default FormPlanos;