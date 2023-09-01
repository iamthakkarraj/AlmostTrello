import TodoList from "../todo/todoList/TodoList";
import TodoStats from "../todo/todoStats/TodoStats";
import { Box } from "@mui/material";
const TodoContainer = () => {
  return (
    <Box sx={{px:5, py:2}}>
      <TodoStats/>
      <TodoList/>
    </Box>
  );
};

export default TodoContainer;
