import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from 'react';


function Inputs(props) {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''
    return (
        <>
            <FormControl display='flex' flexDir='column' isRequired={props.requerido ? true : false} isInvalid={isError} gap='5px'>
                <FormLabel>{props.label}</FormLabel>
                <Input h='30px' w={props.largura} type={props.tipo} placeholder={props.placeholder} value={input} onChange={handleInputChange} />
                {!isError ? (
                  ''
                ) : (
                    <FormErrorMessage mt='2px' fontSize='12px' color='red'>{props.errorMessage}</FormErrorMessage>
                )}
            </FormControl>
        </>
    )
}

export default Inputs;