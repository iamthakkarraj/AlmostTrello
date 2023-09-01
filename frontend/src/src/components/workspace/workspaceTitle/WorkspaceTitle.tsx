import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TOOLTIP_DELETE_ICON } from "../../../common/constants";
import { removeWorkspace } from "../../../services/redux/actions";
import { connect } from "react-redux";
import { WorkspaceActionType } from "../../../services/redux/types";

const mapDispatchToProps = {
  removeWorkspace,
};

const WorkspaceTitle = ({
  title,
  id,
  removeWorkspace,
}: {
  title: string;
  id: number;
  removeWorkspace: (id: number) => WorkspaceActionType;
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Typography fontWeight={600} color="primary" sx={{ pt: 1.25 }}>
        {title}
      </Typography>
      <IconButton
        color="primary"
        component="label"
        sx={{ p: 0, mx: 1 }}
        title={TOOLTIP_DELETE_ICON}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        sx={{ p: 0, m: 0 }}
        color="primary"
        onClick={() => removeWorkspace(id)}
        component="label"
        title={TOOLTIP_DELETE_ICON}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default connect(null, mapDispatchToProps)(WorkspaceTitle);
