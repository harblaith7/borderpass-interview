import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Answer } from "../../../../types";

export default function RadioButtons({
  options,
  answer,
  handleChangeAnswer,
}: {
  options: string[];
  answer: Answer;
  handleChangeAnswer: (value: string) => void;
}) {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={answer.value}
        onChange={(e) => handleChangeAnswer(e.target.value)}
      >
        {options.map((option) => (
          <FormControlLabel value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
