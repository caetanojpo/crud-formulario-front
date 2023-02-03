import CheckOptions from "../../checkbox";
import Form from "../../formulario";
import Inputs from "../../inputs";

function FormCoworking() {

    return (
        <Form
            titulo="Formulário Coworking"
            input={<>
                <Inputs
                    label="Digite o nome de quem está alugando:"
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
                    label="Digite o nome da organização:"
                    tipo="text"
                    largura='100%'
                    placeholder="Empresa LTDA ME"
                />
                <Inputs
                    label="Informe a data e horário da locação:"
                    largura='40%'
                    tipo="datetime-local"
                    errorMessage="O telefone ainda não foi digitado"
                    requerido
                />
            </>}
            checkbox={
                <>
                <CheckOptions
                default="teste"
                value="teste"
                text="teste"/>
                </>
            }
        />
    )
}

export default FormCoworking;