import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import styles from "../../../styles/CloudCertifications.module.scss";
import star from "../../../images/cloudCertifications/star.svg";
import dotdot from "../../../images/cloudCertifications/dot-dot.svg";

const WhyHighDemand = () => {
  return (
    <div className={styles.hightDemandSection}>
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            textAlign: "center",
            width: { xs: "100%", md: "50%" },
            margin: "auto",
          }}
        >
          <Typography
            sx={{ fontSize: 14, fontWeight: 700, mb: 2 }}
            variant="subtitle1"
          >
            Cloud Certifications growth is massive
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
            variant="h4"
          >
            Why Are Cloud{" "}
            <span className={styles.coloredText}>Certifications</span> in High
            Demand?
          </Typography>
          <Typography variant="body1">
            Having cloud certifications dramatically increases one’s earning
            potential and job security. But the same time, many organizations
            are struggling to fill the cloud skill gap.
          </Typography>
        </Box>
        <Box
          className={styles.whyDemandBox}
          sx={{
            p: 6,
            bgcolor: "#FFFFFF",
            boxShadow: "-15px 11px 68px rgba(35, 131, 255, 0.08)",
            borderRadius: 2,
            my: 8,
          }}
        >
          <Box className={styles.starIcon}>
            <Image src={star} alt="" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              className={styles.demanGridBox}
              container
              spacing={{ xs: 2, md: 10 }}
              columns={{ xs: 2, sm: 4, md: 12 }}
              sx={{
                alignItems: "center",
                mb: 4,
              }}
            >
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox1}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    Validates your knowledge and skills to design, develop,
                    deploy and manage specific cloud technology and
                    applications.
                  </Typography>
                </Paper>
              </Grid>
              <Box className={styles.dotDotIcon}>
                <Image src={dotdot} alt="" />
              </Box>
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox2}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    Having a cloud certification speaks itself for your
                    certified cloud knowledge and expertise for that cloud
                    platform & your expertise
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              className={styles.demanGridBox}
              container
              spacing={{ xs: 2, md: 10 }}
              columns={{ xs: 2, sm: 4, md: 12 }}
              sx={{
                alignItems: "center",
                mb: 4,
              }}
            >
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox2}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    It opens up enormous opportunities to work in the best
                    companies across the world.
                  </Typography>
                </Paper>
              </Grid>
              <Box className={styles.dotDotIcon}>
                <Image src={dotdot} alt="" />
              </Box>
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox1}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    Fetches better salary for professionals with cloud
                    certification than similar professionals without
                    certifications.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid
              className={styles.demanGridBox}
              container
              spacing={{ xs: 2, md: 10 }}
              columns={{ xs: 2, sm: 4, md: 12 }}
              sx={{
                alignItems: "center",
                mb: 4,
              }}
            >
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox1}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    Adds significant differentiation in your resume from your
                    peers without certification and makes you a valuable asset
                    for the company.
                  </Typography>
                </Paper>
              </Grid>
              <Box className={styles.dotDotIcon}>
                <Image src={dotdot} alt="" />
              </Box>
              <Grid item xs={2} sm={4} md={6}>
                <Paper className={styles.demandBox2}>
                  <Typography
                    className={styles.demandText}
                    sx={{ fontSize: 15 }}
                    variant="body1"
                  >
                    Significantly increase chances of getting a better job
                    across the industry.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Get Started btn  */}
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained">Get Started</Button>
        </Box>
      </Container>
    </div>
  );
};

export default WhyHighDemand;
