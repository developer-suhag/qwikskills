import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import businessWomen from "../../../images/business-women.svg";
import styles from "../../../styles/Pricing.module.scss";

const Business = () => {
  return (
    <div>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={businessWomen} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36, fontWeight: 700 }, mb: 2 }}
                  variant="h4"
                >
                  QwikSkills for
                  <span className={styles.coloredText}> Business </span>
                </Typography>
                <Typography variant="body1">
                  Planning to get your employees cloud certified and grow your
                  business? QwikSkills practice is designed to help your cloud
                  team to get certified faster and unlock the possibilities for
                  business growth.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "inherit",
                    mt: 3,
                    width: { xs: "100%", md: "inherit" },
                  }}
                >
                  Let’s Connect
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Business;
