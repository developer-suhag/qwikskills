import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../../styles/Home.module.scss";
import unlimitedAccess from "../../../images/unlimited-access.svg";

const QwikskillsOffers = () => {
  return (
    <div className={homeStyles.QwikskillsOffersSection}>
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: 40, fontWeight: 700, mb: 2 }}
            variant="h3"
          >
            What <span className={homeStyles.coloredText}>Qwikskills</span>{" "}
            Offers
          </Typography>
          <Typography
            sx={{ width: { xs: "100%", md: "50%" }, margin: "auto" }}
            variant="body1"
          >
            Get the freedom to experiment, launch, and scale strategies as fast
            as you can think of them.{" "}
          </Typography>
        </Box>
        {/* offers  */}
        <Box sx={{ flexGrow: 1, py: 2 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{ alignItems: "center" }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box>
                <Typography
                  sx={{ fontSize: 36, fontWeight: 700, mb: 2 }}
                  variant="h4"
                >
                  Unlimited Access
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={unlimitedAccess} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default QwikskillsOffers;
