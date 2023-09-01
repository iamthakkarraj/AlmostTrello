import { Box, Button, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { WorkspaceActionType } from "../../../services/redux/types";
import { addWorkspace } from "../../../services/redux/actions";
import { connect } from "react-redux";
import {
  TEXT_ADD,
  TEXT_ADD_NEW_WORKSPACE,
  TEXT_WORKSPACE,
} from "../../../common/constants";
import React from "react";

const mapDispatchToProps = {
  addWorkspace,
};

const AddWorkspace = ({
  addWorkspace,
}: {
  addWorkspace: (item: string) => WorkspaceActionType;
}) => {
  const [value, setValue] = React.useState("");

  const [isValid, setValid] = React.useState<Boolean>(true);

  React.useEffect(() => {
    if(value) setValid(value.trim().length > 0);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    if (isValid) {
      if (value && value.trim().length > 0) {
        addWorkspace(value);
      }
      setValue("");
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <TextField
        fullWidth
        value={value}
        onChange={handleChange}
        error={Boolean(!isValid)}
        sx={{ maxWidth: "286px" }}
        helperText={TEXT_ADD_NEW_WORKSPACE}
        label={TEXT_WORKSPACE}
        title={TEXT_WORKSPACE}
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        sx={{ maxHeight: "56px", ml: 1, flexGrow: 1 }}
        size="large"
        endIcon={<AddBoxIcon />}
      >
        {TEXT_ADD}
      </Button>
    </Box>
  );
};

export default connect(null, mapDispatchToProps)(AddWorkspace);
