import { Grid } from "@mui/material";
import { WorkspaceModel } from "../../../services/redux/types";
import TodoList from "../../todo/todoList/TodoList";
import TodoStats from "../../todo/todoStats/TodoStats";
import WorkspaceHeader from "../workspaceHeader/WorkspaceHeader";

const Workspace = ({ workspace }: { workspace: WorkspaceModel }) => {
  return (
    <Grid
      item
      xs={12}
      lg={3.75}
      md={5.5}
      sm={12}
      sx={{
        borderRadius: "4px",
        border: 1,
        borderColor: "grey.400",
        mr: 2,
        mb: 2,
      }}
    >
      <WorkspaceHeader workspace={workspace} />
      <TodoStats workspaceId={workspace.id} />
      <TodoList workspaceId={workspace.id} />
    </Grid>
  );
};

export default Workspace;
