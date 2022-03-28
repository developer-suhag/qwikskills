import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import connectPeople from "../../../images/group-of-people.svg";
import homeStyles from "../../../styles/Home.module.scss";

const Connected = () => {
  return (
    <div className={homeStyles.connected}>
      <Container sx={{ py: 8, my: 8, bgcolor: "#EDF5FF", borderRadius: 4 }}>
        <Box sx={{ flexGrow: 1, mt: 6, px: { xs: 2, md: 8 } }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Typography
                sx={{ fontSize: { xs: 22, md: 36, fontWeight: 700 }, mb: 2 }}
                variant="h4"
              >
                Lorem ipsum{" "}
                <span className={homeStyles.coloredText}>placeholder</span> text
                commonly
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore{" "}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "inherit", mt: 3 }}
              >
                Get started
              </Button>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={connectPeople} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Connected;
