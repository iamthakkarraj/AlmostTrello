import * as constants from "../../../common/constants";

import React from "react";
import { connect } from "react-redux";
import { Box, TextField } from "@mui/material";
import { RootState, TodoActionTypes } from "../../../services/redux/types";
import { addItem } from "../../../services/redux/actions";
import Button from "@mui/material/Button";

const mapDispatchToProps = {
  addItem,
};

const mapStateToProps = (state: RootState) => {
  return {
    todoItems: state.todo,
  };
};

export const AddTodo = ({
  addItem,
}: {
  addItem: (item: {
    title: string;
    description: string;
    dueDate: Date;
  }) => TodoActionTypes;
}) => {
  const [todo, setTodo] = React.useState({
    title: "",
    description: "",
    dueDate: new Date(),
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleAddTodo = () => {
    if (todo.title.trim() !== "") {
      addItem(todo);
      setTodo({
        title: "",
        description: "",
        dueDate: new Date(),
      });
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <TextField
        fullWidth
        value={todo.title}
        onChange={handleInputChange}
        name={constants.TEXT_TODO_TITLE_NAME}
        label={constants.TEXT_TODO_TITLE_LABEL}
      />
      <TextField
        fullWidth
        onChange={handleInputChange}
        value={todo.description}
        name={constants.TEXT_TODO_DESCRIPTION_NAME}
        label={constants.TEXT_TODO_DESCRIPTION_LABEL}
      />
      <TextField
        fullWidth
        onChange={handleInputChange}
        name={constants.TEXT_TODO_DUEDATE_NAME}
        label={constants.TEXT_TODO_DUEDATE_LABEL}
        variant="outlined"
        value={todo.dueDate}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        {constants.TEXT_ADD}
      </Button>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
