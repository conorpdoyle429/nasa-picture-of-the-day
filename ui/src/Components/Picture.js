import React, {useState} from "react";
import Button from "@mui/material/Button";
import PictureDatePicker from "./PictureDatePicker";
import PictureNumberInput from "./PictureNumberInput";
import PictureRadioGroup from "./PictureRadioGroup";

export default function Picture() {
  const [apiChoice, setApiChoice] = useState("day");
  let input;
  if (apiChoice === "day") {
    input = <PictureDatePicker label="Pick a Day" />;
  } else if (apiChoice === "date-range") {
    input = (
      <>
        <PictureDatePicker label="Start Date" />
        <PictureDatePicker label="End Date" />
      </>
    );
  } else {
    input = <PictureNumberInput />;
  }
  return (
    <>
      <PictureRadioGroup apiChoice={apiChoice} setApiChoice={setApiChoice} />
      {input}
      <Button style={{margin: "10px"}} variant="outlined">
        Submit
      </Button>
    </>
  );
}
