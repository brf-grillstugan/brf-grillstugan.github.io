import { BookingPageProps } from "../../components/layouts/types";
import Booking from "../../components/booking/Booking";

const Grill = (props: BookingPageProps) => {
  return <Booking
        {...props}
        headerTitle="Grill Cabin Booking"
        resourceID="grill"
        events={[]}
    />;
};

export default Grill;
