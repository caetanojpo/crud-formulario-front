import { Box, Button, Checkbox, CheckboxGroup, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import CheckOptions from "../checkbox";
import Inputs from "../inputs";



function Form(props) {


    return (
        <>
            <Flex width="full" align="center" justifyContent="center" >
                <Flex fontFamily='gotham' flexDir='column' border='1px solid red' w='500px' h='100%' bg='#003b33' justifyContent='space-around' color='white'>
                    <Box textAlign="center" padding='32px'>
                        <Heading fontSize='32px' fontFamily='gotham' fontWeight='600'>{props.titulo}</Heading>
                    </Box>
                    <Box h='100%' textAlign="left">
                        <form type='submit' style={{ height: "100%", }}>
                            <Flex flexDir='column' justifyContent='space-around'
                                padding='16px'
                                h='fit-content'
                                gap='20px'>

                                {props.input}
                            </Flex>
                            <FormControl as='fieldset' >
                                <FormLabel as='legend'>Selecione o(s) plano(s): </FormLabel>
                               {props.checkbox}
                            </FormControl>
                            <Flex w='100%' justifyContent='center' border='1px solid red'>
                                <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                                    Confirmar
                                </Button>
                            </Flex>
                        </form>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Form;