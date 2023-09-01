import { Box, Grid } from "@mui/material";
import { connect } from "react-redux";
import { RootState, WorkspaceModel } from "../../../services/redux/types";
import Workspace from "../workspace/Workspace";

const WorkspaceContainer = ({
  workSpaces,
}: {
  workSpaces: WorkspaceModel[];
}) => {
  const workspaces = workSpaces.map((workSpace: WorkspaceModel) => (
    <Workspace key={workSpace.id} workspace={workSpace} />
  ));

  return (
    <Box sx={{ px: 5 }}>
      <Grid container sx={{ m: 0 }}>
        {workspaces}
      </Grid>
    </Box>
  );
};

export default connect((state: RootState) => ({
  workSpaces: state.workspace,
}))(WorkspaceContainer);
