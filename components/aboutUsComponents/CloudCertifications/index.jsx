import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import cloud from "../../../images/about/cloud-certification.svg";
import styles from "../../../styles/Pricing.module.scss";

const CloudCertifications = () => {
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
              flexDirection: { xs: "column-reverse", md: "inherit" },
            }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36, fontWeight: 700 }, mb: 2 }}
                  variant="h4"
                >
                  Get Started on Your
                  <span className={styles.coloredText}>
                    {" "}
                    Cloud Certifications{" "}
                  </span>
                </Typography>
                <Typography variant="body1">
                  We make sure that the questions, and content we include in all
                  of our practice tests is always accurate, original, and made
                  just for what you need to clear certifications in the first
                  attempt.
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
                  Start your free trial
                </Button>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Image src={cloud} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CloudCertifications;
