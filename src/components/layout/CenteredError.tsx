import { Center, Text } from "@mantine/core";

export const CenteredError = (props: { message: string }) => {
	return (
		<Center h="100%">
			<Text size="lg" c="red">
				Error loading data: {props.message}
			</Text>
		</Center>
	);
};
