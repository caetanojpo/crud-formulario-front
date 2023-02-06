import { Checkbox, Stack } from "@chakra-ui/react";

function CheckOptions(props) {
	return (
		<>
	

			<Checkbox
			>
				{props.text}
			</Checkbox>
	
		</>
	)
}

export default CheckOptions;