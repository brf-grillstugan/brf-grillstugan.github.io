import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { PageCardDateProps, PageCardStyle } from "../../components/layouts/types";
import dayjs from "dayjs";

const Laundry = (props: PageCardDateProps) => {

  return (
    <Card sx={props.pageCardStyle}>
      <CardHeader
        title="Laundry Booking"
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <StaticDatePicker
            defaultValue={props.selectedDate}
            disablePast={true}
            onChange={(v, _) => props.setSelectedDate(v ?? dayjs())}
            // orientation="landscape"
            sx={{ width: "fit-content" }}
          />
          <StaticTimePicker
            defaultValue={props.selectedTime}
            ampm={false}
            minutesStep={15}
            onChange={(v, _) => props.setSelectedTime(v ?? dayjs())}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Laundry;
