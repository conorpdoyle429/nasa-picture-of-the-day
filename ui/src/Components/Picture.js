import React, {useState} from "react";
import Button from "@mui/material/Button";
import moment from "moment";
import PictureDatePicker from "./PictureDatePicker";
import PictureList from "./PictureList";
import PictureNumberInput from "./PictureNumberInput";
import PictureRadioGroup from "./PictureRadioGroup";

export default function Picture() {
  const [data, setData] = useState(null);
  const [apiChoice, setApiChoice] = useState("day");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [startDate, setStartDate] = useState(
    moment().subtract(1, "days").format("YYYY-MM-DD")
  );
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [count, setCount] = useState(1);
  let input;
  if (apiChoice === "day") {
    input = (
      <PictureDatePicker
        label="Pick a Day"
        queryParam={date}
        setQueryParam={setDate}
      />
    );
  } else if (apiChoice === "date-range") {
    input = (
      <>
        <PictureDatePicker
          label="Start Date"
          queryParam={startDate}
          setQueryParam={setStartDate}
        />
        <PictureDatePicker
          label="End Date"
          queryParam={endDate}
          setQueryParam={setEndDate}
        />
      </>
    );
  } else {
    input = <PictureNumberInput queryParam={count} setQueryParam={setCount} />;
  }

  const submit = () => {
    let url = `http://0.0.0.0:80/api/pictures/${apiChoice}`;
    if (apiChoice === "day") {
      url += `?date=${date}`;
    } else if (apiChoice === "date-range") {
      url += `?startDate=${startDate}&endDate=${endDate}`;
    } else {
      url += `?count=${count}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(Array.isArray(json) ? json : [json]))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <PictureRadioGroup apiChoice={apiChoice} setApiChoice={setApiChoice} />
      {input}
      <Button style={{margin: "10px"}} variant="outlined" onClick={submit}>
        Submit
      </Button>
      {data && <PictureList data={data} />}
    </>
  );
}
