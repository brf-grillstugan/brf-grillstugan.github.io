import { BookingPageProps } from '../../components/layouts/types';
import Booking from "../../components/booking/Booking";

const Laundry = (props: BookingPageProps) => {
  const events = [{
      id: 10,
      startAt: "2023-03-22T08:00:00.000Z",
      endAt: "2023-03-22T15:00:00.000Z",
      summary: "William",
      color: "red",
    },
    {
      id: 11,
      startAt: "2023-03-15T06:00:00.000Z",
      endAt: "2023-03-15T10:00:00.000Z",
      summary: "Vilgot",
      color: "blue",
    },
    {
      id: 12,
      startAt: "2023-03-24T06:00:00.000Z",
      endAt: "2023-03-24T10:00:00.000Z",
      summary: "Martin",
      color: "green",
    },
    {
      id: 13,
      startAt: "2023-03-28T12:00:00.000Z",
      endAt: "2023-03-28T19:00:00.000Z",
      summary: "Gustav",
      color: "yellow",
    }];

  return <Booking
        {...props}
        headerTitle="Laundry Booking"
        resourceID="laundry"
        events={events}
    />;
};

export default Laundry;
