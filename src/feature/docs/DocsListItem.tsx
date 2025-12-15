import { Button, Stack, Text } from "@mantine/core";
import { Link } from "wouter";
import { RouteUtils } from "~/lib/routes";
import type { DocType } from "~/types/doc";

export const DocsListItem = (props: { doc: DocType }) => {
	return (
		<Button
			justify="start"
			w={120}
			h={150}
			variant="default"
			component={Link}
			href={RouteUtils.getDocPath({ id: props.doc.id })}
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
