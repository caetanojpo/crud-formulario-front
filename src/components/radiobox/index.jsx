import { Radio} from "@chakra-ui/react";

function RadioOptions(props) {
	return (
		<>
			<Radio spacing='1rem' iconColor='blue.400' iconSize='1rem'  size='md' value={props.value}>{props.text}</Radio>
		</>
	)
}

export default RadioOptions;