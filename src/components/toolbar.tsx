import { MessageSquareTextIcon, Pencil, Smile, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Hint } from "./hint";
import { EmojiPopover } from "./emoji-popover";

interface ToolbarProps {
  isAuthor: boolean;
  isPending: boolean;
  handleEdit: () => void;
  handleDelete: () => void;
  handleThread: () => void;
  handleReaction: (value: string) => void;
  hideThreadButton?: boolean;
}

export const Toolbar = ({
  isAuthor,
  isPending,
  handleEdit,
  handleDelete,
  handleThread,
  handleReaction,
  hideThreadButton,
}: ToolbarProps) => {
  return (
    <div className="absolute top-0 right-5">
      <div className="group-hover:opacity-100 opacity-0 transition-opacity border bg-white rounded-md shadow-sm">
        <EmojiPopover
          hint="Add reaction"
          onEmojiSelect={(emoji) => handleReaction(emoji)}
        >
          <Button 
          variant="ghost" 
          size="iconSm" 
          disabled={isPending}
          >
            <Smile className="size-4" />
          </Button>
        </EmojiPopover>
        {!hideThreadButton && (
        <Hint label="Reply in thread">
          <Button 
          variant="ghost" 
          size="iconSm" 
          disabled={isPending}
          onClick={handleThread}
          >
            <MessageSquareTextIcon className="size-4" />
          </Button>
        </Hint>
        )}
        {isAuthor && (
        <Hint label="Edit Message">
          <Button 
          variant="ghost" 
          size="iconSm" 
          disabled={isPending}
          onClick={ handleEdit}
          >
            <Pencil className="size-4" />
          </Button>
        </Hint>
        )}
        {isAuthor && (
            <Hint label="Delete Message">
              <Button variant="ghost" 
              size="iconSm" 
              disabled={isPending}
              onClick={handleDelete}
              >
                <Trash className="size-4" />
              </Button>
            </Hint>
        )}
      </div>
    </div>
  );
};
