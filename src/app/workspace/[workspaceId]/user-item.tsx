import Link from "next/link";
import { cva , type VariantProps } from "class-variance-authority";

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { cn } from "@/lib/utils";

import { Id } from "../../../../convex/_generated/dataModel"


const userItemsVariant = cva (
    "flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",
    {
        variants : {
            variant:{
                default : "text-[#f9edffcc]",
                active : "text-[#481349] bg-white/90 hover:bg-white/90",
            },
        },
        defaultVariants : {
            variant : "default",
        }
    },
); 

interface UserItemProps {
    id : Id<"members">;
    label?: string;
    image?: string;
    variant?: VariantProps<typeof userItemsVariant>["variant"];
};
export const UserItem = ({
 id,
 label = "Member",
 image,
 variant
} : UserItemProps) => {
    const workspaceId = useWorkspaceId();
    const avatarFallback = label.charAt(0).toUpperCase();

    return (
        <Button
        variant="transparent"
        className={cn(userItemsVariant({variant}))}
        size="sm"
        asChild
        >
            <Link href={`/workspace/${workspaceId}/member/${id}`}>
            <Avatar className="size-5 rounded-md">
                <AvatarImage className="rounded-md" src={image}/>
                <AvatarFallback className="rounded-md bg-accent/25 text-white text-xs">
                    {avatarFallback}
                </AvatarFallback>
            </Avatar>
            <span className="text-sm truncate">{label}</span>
            </Link>
        </Button>
    ); 
};