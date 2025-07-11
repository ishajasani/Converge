"use client"

import { Loader } from "lucide-react";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { WorkspaceSidebar } from "./workspace-sidebar";

import { Thread } from "@/features/messages/components/thread";
import { Profile } from "@/features/members/components/profile";

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";

import { usePanel } from "@/hooks/use-panel";

import { Id } from "../../../../convex/_generated/dataModel";
interface WorkspaceIdLayoutProps {
    children : React.ReactNode;
}

const WorkspaceIdLayoutProps = ({children} : WorkspaceIdLayoutProps) => {
    const { parentMessageId , onClose  , profileMemberId} = usePanel();

    const showPanel = !!parentMessageId || !!profileMemberId;
    
    return ( 
        <div className="h-full">
            <Toolbar/>
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar/>
                <ResizablePanelGroup 
                direction="horizontal"
                autoSaveId="ij-workspace-layout"
                >
                    <ResizablePanel 
                    defaultSize={13}
                    minSize={13}
                    className="bg-[#5E2C5F] "
                    >
                        <WorkspaceSidebar/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel minSize={20} defaultSize={80}>
                    {children}
                    </ResizablePanel>
                    {showPanel && (
                        <>
                        <ResizableHandle withHandle/>
                        <ResizablePanel minSize={20} defaultSize={29}>
                            {parentMessageId ? 
                            (
                               <Thread
                               messageId = { parentMessageId as Id<"messages">}
                               onClose= {onClose}
                               />
                            ) : profileMemberId ? (
                                <Profile 
                                memberId = {profileMemberId as Id<"members">}
                                onClose = {onClose}
                                />
                            ) : (
                            <div className="flex h-full items-center justify-center">
                                <Loader className="size-5 animate-spin text-muted-foreground"/>
                            </div>
                            )}
                        </ResizablePanel>
                        </>
                    )}
                </ResizablePanelGroup>
            </div>
        </div>
     );
};
 
export default WorkspaceIdLayoutProps;