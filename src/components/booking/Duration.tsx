import dayjs, { Dayjs } from "dayjs";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";

export type DurationProps = {
  start: Dayjs | undefined;
  end: Dayjs | undefined;
};

const Duration = (props: DurationProps) => {
  const start_defaulted = props.start ?? dayjs();
  const end_defaulted = props.end ?? start_defaulted;

  const hours = end_defaulted.diff(start_defaulted, "hours");
  const minutes = end_defaulted.diff(start_defaulted, "minutes") - 60 * hours;

  return (
    <>
      <FormControl sx={{ m: 1, width: "10ch" }} variant="outlined">
        <InputLabel htmlFor="booking-hours">Hours</InputLabel>
        <Input
          id="booking-hours"
          endAdornment={<InputAdornment position="end">h</InputAdornment>}
          inputMode="numeric"
          value={hours}
          readOnly={true}
        />
      </FormControl>
      :
      <FormControl sx={{ m: 1, width: "12ch" }} variant="outlined">
        <InputLabel htmlFor="booking-minutes">Minutes</InputLabel>
        <Input
          id="booking-minutes"
          endAdornment={<InputAdornment position="end">m</InputAdornment>}
          inputMode="numeric"
          value={minutes}
          readOnly={true}
        />
      </FormControl>
    </>
  );
};

export default Duration;
