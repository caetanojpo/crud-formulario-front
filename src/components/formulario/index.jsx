import {
  Box,
  Button,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  RadioGroup,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Form(props) {
  const [value, setValue] = useState('1');

  return (
    <>
      <Flex width="full" align="center" justifyContent="center">
        <Flex
          padding="32px"
          fontFamily="gotham"
          flexDir="column"
          w="500px"
          h="100%"
          bg="#003b33"
          justifyContent="space-around"
          color="white"
          borderRadius="8px"
          boxShadow="6px 6px 15px #c0cad4,
             -6px -6px 15px #f4ffff;"
        >
          <Box textAlign="center" padding="32px">
            <Heading fontSize="32px" fontFamily="gotham" fontWeight="600">
              {props.titulo}
            </Heading>
          </Box>
          <Box h="100%" textAlign="left">
            <form type="submit" style={{ height: '100%' }}>
              <Flex
                flexDir="column"
                justifyContent="space-around"
                h="fit-content"
                gap="20px"
              >
                {props.input}
              </Flex>
              <FormControl
                mt="20px"
                mb="20px"
                gap="20px"
                justifyContent="space-around"
                display="flex"
                flexDir="column"
                as="fieldset"
              >
                {props.radio ? (
                  <>
                    <FormLabel mb="10px" as="legend">
                      {props.labelRadio}{' '}
                    </FormLabel>
                    <RadioGroup
                      onChange={setValue}
                      value={value}
                      defaultValue={props.default}
                      direction="row"
                      w="100%"
                    >
                      <Stack
                        w="100%"
                        spacing={5}
                        direction="column"
                        justifyContent="flex-start"
                      >
                        {props.radiobox}
                      </Stack>
                    </RadioGroup>
                  </>
                ) : (
                  ''
                )}

                {props.check ? (
                  <>
                    <FormLabel mb="10px" as="legend">
                      {props.labelCheck}{' '}
                    </FormLabel>
                    <CheckboxGroup defaultValue={props.default} direction="row">
                      <Stack
                        w="100%"
                        spacing={5}
                        direction="column"
                        justifyContent="flex-start"
                      >
                        {props.checkbox}
                      </Stack>
                    </CheckboxGroup>
                  </>
                ) : (
                  ''
                )}
              </FormControl>
              <Flex mt="30px" gap="10px" mb="20px" flexDir="column">
                <Text fontWeight="600">{props.textareaLabel}</Text>
                <Textarea placeholder={props.textareaPlaceholder} />
              </Flex>
              <Flex w="100%" justifyContent="center">
                <Button
                  cursor="pointer"
                  type="submit"
                  variantColor="teal"
                  variant="outline"
                  width="200px"
                  border="1px solid white"
                  borderRadius="8px"
                  padding="10px 0px"
                  mt={4}
                >
                  Confirmar
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
