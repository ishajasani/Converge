"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkSpaceIdPage = () => {
    const workspaceId = useWorkspaceId();
    const data = useGetWorkspace({id: workspaceId});
    return ( 
        <div>
            Workspace 
        </div>
     );
};
 
export default WorkSpaceIdPage;