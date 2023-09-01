import { Box } from "@mui/material";
import { WorkspaceModel } from "../../../services/redux/types";
import WorkspaceFilter from "../workspaceFilter/WorkspaceFilter";
import WorkspaceTitle from "../workspaceTitle/WorkspaceTitle";

const WorkspaceHeader = ({workspace}:{workspace: WorkspaceModel}) => {
  return (
    <Box
      sx={{ display: "flex", mx: 2, mt: 2, justifyContent: "space-between" }}
    >
      <WorkspaceTitle id={workspace.id} title={workspace.title} />
      <WorkspaceFilter id={workspace.id} />
    </Box>
  );
};

export default WorkspaceHeader;
