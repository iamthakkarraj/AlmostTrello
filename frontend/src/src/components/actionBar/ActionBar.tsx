import { Grid } from "@mui/material";
import AddTodo from "../todo/addTodo/AddTodo";
import AddWorkspace from "../workspace/addWorkspace/AddWorkspace";

const ActionBar = () => {
  const gridStyle = {
    mr: 2,
    my: 2,
  };
  return (
    <Grid container sx={{ px:5, m: 0, pt: 2 }}>
      <Grid item xs={12} lg={3.75} md={5.5} sm={12} sx={gridStyle}>
        <AddTodo></AddTodo>
      </Grid>
      <Grid item xs={12} lg={3.75} md={5.5} sm={12} sx={gridStyle}>
        <AddWorkspace></AddWorkspace>
      </Grid>
    </Grid>
  );
};

export default ActionBar;
