import { CenteredError } from "~/components/layout/CenteredError";
import { CenteredLoader } from "~/components/layout/CenteredLoader";
import { db } from "~/lib/db";
import { MessageItem } from "./MessageItem";

export const MessagesList = () => {
	const { isLoading, error, data } = db.useQuery({ messages: {} });

	if (isLoading) {
		return <CenteredLoader />;
	}

	if (error) {
		return <CenteredError message={"error.message"} />;
	}

	const { messages } = data;

	return (
		<>
			{messages.map((message) => (
				<MessageItem key={message.id} message={message} />
			))}
		</>
	);
};
