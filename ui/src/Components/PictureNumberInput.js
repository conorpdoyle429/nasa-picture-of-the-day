import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function PictureNumberInput(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {m: 1, width: "25ch"},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          value={props.queryParam}
          onChange={(event) => props.setQueryParam(event.target.value)}
          InputProps={{
            inputProps: {min: 1, max: 10},
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
