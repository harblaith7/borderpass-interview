import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressBar({
  questionaireLength,
  currentQuestionIndex,
}: {
  questionaireLength: number;
  currentQuestionIndex: number;
}) {
  const calculateProgress = () => {
    return (currentQuestionIndex / questionaireLength) * 100;
  };
  const [progress, setProgress] = useState(calculateProgress());

  useEffect(() => {
    setProgress(calculateProgress());
  }, [currentQuestionIndex]);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
