import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { PageCardStyle } from "../components/layouts/types";

const Home = (props: PageCardStyle) => {
  // onClick={() => setLoggedIn(!loggedIn)}
  return (
	<Card sx={props.pageCardStyle}>
		<CardHeader title='Home' titleTypographyProps={{ variant: 'h6' }} />
		<CardContent>
      		<Button variant="contained">Hello World</Button>
		</CardContent>
	</Card>
  );
};

export default Home;
