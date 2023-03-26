import "./Calendar.css";

import Kalend, { CalendarEvent, CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css"; // import styles
import { BookingEvent } from "../layouts/types";
import dayjs from "dayjs";

type CalendarProps = {
  events: CalendarEvent[];
  newBookingText: string;
  newBookingColor: string;
  onBookingChange: (booking: BookingEvent | undefined) => void;
};

const Calendar = (props: CalendarProps) => {
  return (
    <div style={{ height: 700 }}>
      <Kalend
        initialView={CalendarView.WEEK}
        events={props.events}
        onNewEventClick={(d, e) => props.onBookingChange(!(d.startAt && d.endAt) ? undefined : {
            title: props.newBookingText,
            start: dayjs(d.startAt),
            end: dayjs(d.endAt),
            color: props.newBookingColor,
        })}
        isNewEventOpen={false}
        // onEventClick={console.log}
        disabledDragging={true} // Bookings cannot be changed
        showTimeLine={true}
        showWeekNumbers={true}
        newEventText={props.newBookingText}
      />
    </div>
  );
};

export default Calendar;
