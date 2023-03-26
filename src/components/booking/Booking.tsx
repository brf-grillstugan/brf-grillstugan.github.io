// import styles
import "kalend/dist/styles/index.css";
import "./Overrides.css";

// Import js
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import {
  BookingDetailsProps,
  PageCardStyle,
} from "../../components/layouts/types";

import { CalendarEvent } from "kalend"; // import component
import Icon from "@mui/material/Icon";
import Duration from './Duration';
import Calendar from "./Calendar";
import dayjs from 'dayjs';

export type BookingProps = PageCardStyle & BookingDetailsProps & { 
    headerTitle: string,
    resourceID: string,
  events: CalendarEvent[];
};

const Booking = (props: BookingProps) => {
  const [tmpBookingEvent, setTmpBookingEvent] = useState<CalendarEvent | undefined>();

  React.useEffect(() => {
    const startTimePicker = document.querySelector(
      ".start-time-picker > div.MuiPickersLayout-toolbar > span.MuiTypography-overline",
    );
    const endTimePicker = document.querySelector(
      ".end-time-picker > div.MuiPickersLayout-toolbar > span.MuiTypography-overline",
    );
    if (startTimePicker) startTimePicker.innerHTML = "Start Time";
    if (endTimePicker) endTimePicker.innerHTML = "End Time";
  }, []);

  useEffect(() => {
    if (props.booking) {
      setTmpBookingEvent({
        id: 0,
        startAt: props.booking.start.toISOString(),
        endAt: props.booking.end.toISOString(),
        summary: props.booking.title,
        color: props.booking.color,
      });
    }
  }, [props.booking]);

  return (
    <Card sx={props.pageCardStyle}>
      <CardHeader
        title={props.headerTitle}
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardContent>
        <Calendar
          events={[...props.events, ...(tmpBookingEvent ? [tmpBookingEvent] : [])]}
          newBookingText={props.defaultBookingTitle}
          newBookingColor={props.defaultBookingColor}
          onBookingChange={(b) => {
            console.log("setting:", b);
            if (b) props.setBooking(b);
          }}
        />
        <div style={{ padding: "32px 8px" }}>
          <Typography variant="h4">Booking Details</Typography>
          <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }} >
            <StaticTimePicker
              className="start-time-picker static-time-picker-override"
              ampm={false}
              minutesStep={15}
              value={props.booking?.start ?? dayjs()}
              onChange={(v, _) => {
                if (props.booking) {
                  const newStart = props.booking.start
                    .set("hour", v?.get("hour") ?? 0)
                    .set("minute", v?.get("minute") ?? 0);
                  props.setBooking({
                    ...props.booking,
                    start: newStart,
                  });
                }
              }}
            />
            <StaticTimePicker
              className="end-time-picker static-time-picker-override"
              minTime={props.booking?.start.add(15, "minute")}
              ampm={false}
              minutesStep={15}
              value={props.booking?.end ?? dayjs()}
              onChange={(v, _) => {
                if (props.booking) {
                  const newEnd = props.booking.end
                    .set("hour", v?.get("hour") ?? 0)
                    .set("minute", v?.get("minute") ?? 0);
                  props.setBooking({
                    ...props.booking,
                    end: newEnd,
                  });
                }
              }}
            />
          </div>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 0,
            }} >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "baseline",
              }} >
              Duration
              <Duration start={props.booking?.start} end={props.booking?.end}/>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Icon>check</Icon>}
                disabled={!props.booking}
              >Confirm Booking</Button>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default Booking;
