import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PictureRadioGroup(props) {
  return (
    <FormControl>
      <FormLabel id="radio-buttons" style={{color: "#282c34"}}>
        Pick your picture
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="radio-buttons"
        name="radio-buttons"
        onChange={(event) => props.setApiChoice(event.target.value)}
        value={props.apiChoice}
      >
        <FormControlLabel value="day" control={<Radio />} label="Day" />
        <FormControlLabel
          value="date-range"
          control={<Radio />}
          label="Date Range"
        />
        <FormControlLabel value="random" control={<Radio />} label="Random" />
      </RadioGroup>
    </FormControl>
  );
}
