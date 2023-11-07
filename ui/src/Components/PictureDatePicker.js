import * as React from "react";
import dayjs from "dayjs";
import moment from "moment";
import "../App.css";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export default function PictureDatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={props.label}
          className="App-link"
          value={dayjs(props.queryParam)}
          onChange={(value) => props.setQueryParam(value)}
          maxDate={dayjs(moment().format("YYYY-MM-DD"))}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
