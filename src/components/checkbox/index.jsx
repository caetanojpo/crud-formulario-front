import { Checkbox, CheckboxGroup, HStack } from "@chakra-ui/react";

function CheckOptions(props) {
    return (
        <>
            <CheckboxGroup defaultValue={props.default}>
                <HStack spacing='24px'>
                    <Checkbox value={props.value}>{props.text}</Checkbox>
                </HStack>
            </CheckboxGroup>


        </>
    )
}

export default CheckOptions;