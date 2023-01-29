import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Answer } from "../../../../types";

export default function Dropdown({
  options,
  answer,
  handleChangeAnswer,
}: {
  options: string[];
  answer: Answer;
  handleChangeAnswer: (value: string) => void;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={answer.value}
          onChange={(e) => handleChangeAnswer(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
