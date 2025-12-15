import { Container, Group, Loader, Stack, Typography } from "@mantine/core";
import { DocsListItem } from "~/feature/docs/DocsListItem";
import { db } from "~/lib/db";

export const DocsHome = () => {
	const { isLoading, error, data } = db.useQuery({ docs: {} });

	if (isLoading) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			<Typography style={{ color: "var(--mantine-color-error)" }}>
				Error: {error.message}
			</Typography>
		);
	}

	const { docs } = data;

	return (
		<Stack h="100%">
			<Group gap={8}>
				{docs.map((doc) => (
					<DocsListItem key={doc.id} doc={doc} />
				))}
			</Group>
		</Stack>
	);
};
