import { Center, Loader } from "@mantine/core";

export const CenteredLoader = () => {
	return (
		<Center h="100%">
			<Loader type="dots" />
		</Center>
	);
};
