"use client"

import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
    children : React.ReactNode;
}

const WorkspaceIdLayoutProps = ({children} : WorkspaceIdLayoutProps) => {
    return ( 
        <div className="h-full">
            <Toolbar/>
            {children}
        </div>
     );
};
 
export default WorkspaceIdLayoutProps;