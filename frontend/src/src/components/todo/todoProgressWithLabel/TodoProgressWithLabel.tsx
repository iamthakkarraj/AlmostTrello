import { Box, CircularProgress, Typography, useTheme } from "@mui/material";

const TodoProgressWithLabel = ({
  count,
  percentage,
  label,
  color,
}: {
  count: number;
  percentage: number;
  label: string;
  color: string;
}) => {
  return (
    <Box sx={{ display: "flex", px: 1, flexDirection: "column" }}>
      <Box
        bgcolor={useTheme().palette.mode === "light" ? "grey.100" : "grey.800"}
        sx={{
          boxShadow: 1,
          borderRadius: 2,
          px: 2,
          py: 1,
          position: "relative",
          display: "inline-flex",
        }}
      >
        <CircularProgress
          variant="determinate"
          sx={{ color: color }}
          value={percentage}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {count}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ textAlign: "center", fontSize: 12, pt: 0.5 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default TodoProgressWithLabel;
