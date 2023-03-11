import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const About = () => {
  return (
    <Card>
        <CardHeader title='About' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
            <Typography variant="h4">
                Information
            </Typography>
            <Typography>
                This web application is used to manage and book common areas of the building,
                such as the laundry room, the bike room, and the storage room.
                <br />
                The service is used by the tenants of the&nbsp; 
                <b>BRF Grillstugan</b> housing cooperative in Stockholm, Sweden.
                To use the application, you must be a tenant of the housing cooperative.
            </Typography>
            <Typography variant="h4" sx={{ mt: 5 }}>
                Developer
            </Typography>
            <Typography>
                The application is developed by&nbsp;
                <b>William Rågstad</b>, a tenant of the housing cooperative.
                The application is developed in my spare time, and is not affiliated with the housing cooperative.
            </Typography>
            <Typography variant="h4" sx={{ mt: 5 }}>
                Contact
            </Typography>
            <Typography>
                If you have any questions or suggestions, please contact me via&nbsp;
                <a href="mailto:william.ragstad@gmail.com">Gmail</a> or&nbsp;
                knock on my door <em>(apartment 1202)</em>.
            </Typography>
        </CardContent>
    </Card>
  );
};

export default About;
