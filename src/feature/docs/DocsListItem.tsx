import { Button, Stack, Text } from "@mantine/core";
import type { Doc } from "~/types/doc";

export const DocsListItem = (props: { doc: Doc }) => {
	return (
		<Button
			justify="start"
			w={120}
			h={150}
			variant="default"
			// component={Link} // for router, later
		>
			<Stack gap={4} align="start">
				<Text fw={500} truncate>
					Doc Title
				</Text>
				<Text>Text</Text>
			</Stack>
		</Button>
	);
};
