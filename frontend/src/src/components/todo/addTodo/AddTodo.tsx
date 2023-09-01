import {
  PLACEHOLDER_ADD_TODO,
  TEXT_ADD_TODO,
  TEXT_SELECT_WORKSPACE,
  TOOLTIP_TODO_INPUT,
} from "../../../common/constants";

import React from "react";
import { connect } from "react-redux";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import {
  RootState,
  TodoActionTypes,
  WorkspaceModel,
} from "../../../services/redux/types";
import { addItem } from "../../../services/redux/actions";

const mapDispatchToProps = {
  addItem,
};

const mapStateToProps = (state: RootState) => {
  return {
    workspaces: state.workspace,
  };
};

export const AddTodo = ({
  workspaces,
  addItem,
}: {
  workspaces: WorkspaceModel[];
  addItem: (item: { text: string; workspaceId: number }) => TodoActionTypes;
}) => {
  const [todoValue, setTodoValue] = React.useState("");

  const [isTodoValid, setTodoValid] = React.useState<Boolean>(true);

  const [workspaceValue, setWorkspaceValue] = React.useState<number>(
    workspaces[0].id ?? 0
  );

  const [isWorkspaceValid, setWorkspaceValid] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (todoValue) setTodoValid(todoValue.trim().length > 0);
  }, [todoValue]);

  React.useEffect(() => {
    if (todoValue) setWorkspaceValid(workspaceValue !== 0);
  }, [workspaceValue, todoValue]);

  const handleTodoChange = (e: React.ChangeEvent<any>) => {
    setTodoValue(e.target.value);
  };

  const handleWorkspaceChange = (e: SelectChangeEvent<unknown>) => {
    setWorkspaceValue(Number(e.target.value));
  };

  const onSubmit = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (todoValue && todoValue.trim().length > 0 && isWorkspaceValid) {
        addItem({ text: todoValue, workspaceId: workspaceValue });
      }
      setTodoValue("");
    }
  };

  const workspaceSelectItems = workspaces.map((x: WorkspaceModel) => (
    <MenuItem key={x.id} value={x.id}>
      {x.title}
    </MenuItem>
  ));

  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        value={todoValue}
        onChange={handleTodoChange}
        fullWidth
        onKeyDown={(e) => onSubmit(e)}
        sx={{ maxWidth: "286px" }}
        error={Boolean(!isTodoValid)}
        helperText={TEXT_ADD_TODO}
        label={PLACEHOLDER_ADD_TODO}
        title={TOOLTIP_TODO_INPUT}
      />
      <FormControl sx={{ ml: 1, flexGrow: 1 }}>
        <InputLabel id="workspace-label">Workspace</InputLabel>
        <Select
          onChange={(e: SelectChangeEvent<unknown>) => {
            handleWorkspaceChange(e);
          }}
          value={workspaceValue}
          labelId="workspace-label"
          error={Boolean(!isWorkspaceValid)}
          id="workspace-select-helper"
          label="Workspace"
        >
          {workspaceSelectItems}
        </Select>
        <FormHelperText>{TEXT_SELECT_WORKSPACE}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
