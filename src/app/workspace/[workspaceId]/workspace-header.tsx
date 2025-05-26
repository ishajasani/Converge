import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const WorkspaceHeader = () => {

    return(
        <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button 
                    variant="transparent"
                    className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
                    size="sm"
                    >
                        <span>{workspace?.name}</span>
                    </Button>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </div>
    )
}