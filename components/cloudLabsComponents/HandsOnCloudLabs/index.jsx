import { Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../../styles/CloudLabs.module.scss";
import cloudLabs from "../../../images/cloudLabs/cloud-labs.svg";
import { Box } from "@mui/system";
import Image from "next/image";

const HandsOnCloudLabs = () => {
  return (
    <div className={styles.HandsOnCloudLabsSection}>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1, mt: 6 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 8 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={6}>
              <Image src={cloudLabs} alt="" />
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit" } }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 36 },
                    fontWeight: 700,
                  }}
                >
                  What are QwikSkills{" "}
                  <span className={styles.coloredText}>Hands - on</span> Cloud
                  Labs?
                </Typography>
                <Typography variant="body1">
                  Hands on cloud labs are controlled and guided cloud enviorment
                  to elarn and practice cloud skills.
                </Typography>
              </Box>
              {/* hands des box */}
              <Grid
                className={styles.handsOnDesContainer}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={4} md={6}>
                  <Paper className={styles.handsOnDesBox}>
                    <Typography variant="h6">
                      Apply your learning knowledge in practice
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <Paper className={styles.handsOnDesBox}>
                    <Typography variant="h6">
                      Get guided instructions and procedure
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <Paper className={styles.handsOnDesBox}>
                    <Typography variant="h6">
                      No risk of any unwanted incident on cloud platform
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <Paper className={styles.handsOnDesBox}>
                    <Typography variant="h6">
                      One account access to all hands-on cloud labs
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                  <Paper className={styles.handsOnDesBox}>
                    <Typography variant="h6">
                      Practice, play and experiment to grow
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HandsOnCloudLabs;
