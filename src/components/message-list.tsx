import { GetMessagesReturnType } from "@/features/messages/api/use-get-messages";

interface MessageListProps {
    memberName? : string;
    memberImage?: string;
    channelName?: string;
    channelCreationTime?: number;
    variant?: "channel" | "thread" | "conversation";
    data : GetMessagesReturnType | undefined;
    loadMore : () => void;
    isLoadingMore : boolean;
    canLoadMore : boolean;
}

export const MessageList = ({
    memberName,
    memberImage,
    channelCreationTime,
    data,
    variant = "channel",
    loadMore,
    isLoadingMore,
    canLoadMore,
} : MessageListProps) => {
    return(
        <div>
            This is messageList
        </div>
    );
};