import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import {
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE,
  setFilter,
} from "../../../services/redux/actions";
import {
  RootState,
  WorkspaceActionType,
  WorkspaceModel,
} from "../../../services/redux/types";
import {
  TEXT_ACTIVE_TODO_FILTER,
  TEXT_ALL_TODO_FILTER,
  TEXT_COMPLETED_TODO_FILTER,
} from "../../../common/constants";

const mapDispatchToProps = {
  setFilter,
};

const mapStateToProps = (state: RootState) => {
  return {
    workspaces: state.workspace,
  };
};

const WorkspaceFilter = ({
  id,
  workspaces,
  setFilter,
}: {
  id: number;
  workspaces: WorkspaceModel[];
  setFilter: (filter: string, id: number) => WorkspaceActionType;
}) => {
  const [selectedFilter, updateFilter] = React.useState<string>(
    workspaces.find((x) => x.id === id)?.filter ?? FILTER_ALL
  );
  const handleOnChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    updateFilter(newValue);
    setFilter(newValue, id);
  };

  return (
    <ToggleButtonGroup
      value={selectedFilter}
      exclusive
      onChange={handleOnChange}
      aria-label="text alignment"
    >
      <ToggleButton
        title={TEXT_ALL_TODO_FILTER}
        value={FILTER_ALL}
        aria-label="left aligned"
      >
        <ListAltIcon />
      </ToggleButton>
      <ToggleButton
        title={TEXT_ACTIVE_TODO_FILTER}
        value={FILTER_COMPLETE}
        aria-label="centered"
      >
        <AssignmentTurnedInIcon />
      </ToggleButton>
      <ToggleButton
        title={TEXT_COMPLETED_TODO_FILTER}
        value={FILTER_ACTIVE}
        aria-label="right aligned"
      >
        <AssignmentLateIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceFilter);
