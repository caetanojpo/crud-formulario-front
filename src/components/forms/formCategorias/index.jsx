import Form from "../../formulario";
import Inputs from "../../inputs";


function FormCategoria() {

	return (
		<Form
			titulo="Formulário do Categoria"
			input={
			<>
				<Inputs
					label="Digite a descrição da categoria"
					tipo="text"
					placeholder="Educacional/Institucional..."
					errorMessage="Aguardando que seja inserida a categoria"
					largura='100%'
					requerido
				/>
        
			</>
			}
            textareaLabel='Observações:'
            textareaPlaceholder="Digite aqui as informações extras sobre a categoria."
		/>
	)
}

export default FormCategoria;