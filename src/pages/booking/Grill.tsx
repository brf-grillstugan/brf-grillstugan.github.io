import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from "dayjs";
import { PageCardStyle } from "../../components/layouts/types";

const Grill = (props: PageCardStyle) => {
  return (
    <Card sx={props.pageCardStyle}>
      <CardHeader
        title="Grill Cabin Booking"
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
            defaultValue={dayjs()}
            disablePast={true}
            // orientation="landscape"
            sx={{ width: "fit-content" }}
          />
          <StaticTimePicker
            defaultValue={dayjs()}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Grill;
