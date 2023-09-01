import { Grid } from "@mui/material";
import AddTodo from "../todo/addTodo/AddTodo";

const ActionBar = () => {
  const gridStyle = {
    mr: 2,
    my: 2,
  };
  return (
    <Grid container sx={{ px:5, m: 0, pt: 2 }}>
      <Grid item xs={12} lg={12} md={12} sm={12} sx={gridStyle}>
        <AddTodo></AddTodo>
      </Grid>
    </Grid>
  );
};

export default ActionBar;
