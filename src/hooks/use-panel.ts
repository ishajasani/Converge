import { useParentMessageId } from "@/features/messages/store/use-parent-message-id";

export const usePanel = () => {
    const [parentMessageId , setParentMessageId] = useParentMessageId();

    const onOpenMessage = (messaageId : string) => {
        setParentMessageId(messaageId);
    };

    const onClose = () => {
        setParentMessageId(null);
    };

    return {
        parentMessageId,
        onOpenMessage,
        onClose,
    };
};