import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import cloud from "../../../images/cloud.svg";
import computerIcon from "../../../images/computer-icon.svg";
import crowd from "../../../images/crowd.svg";
import google from "../../../images/google.svg";
import enterpriseHero from "../../../images/enterprise/enterprise-hero.svg";
import plain from "../../../images/plain.svg";
import trustPilot from "../../../images/trustpilot.svg";
import styles from "../../../styles/Enterprise.module.scss";

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <Container className={styles.container} sx={{ py: 10 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: 28, md: 40 },
                fontWeight: 700,
                width: { xs: "100%", md: "70%" },
                margin: "auto",
                mb: { xs: 1, md: 3 },
              }}
              variant="h3"
            >
              Helping Teams for Clear Cloud{" "}
              <span className={styles.coloredText}> Certification Exams </span>
              in the First Attempt
            </Typography>
            <Typography
              sx={{ width: { xs: "100%", md: "70%" }, margin: "auto" }}
              variant="body1"
            >
              With Hundreds of Cloud Certification Tests, Hands-On Labs on the
              platform, Qwikskills is helping companies to maximise their
              revenue & clientele.
            </Typography>
            {/* buttons  */}
            <Box
              sx={{
                mt: 3,
                display: "flex",
                gap: { xs: 2, md: 4 },
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  textTransform: "inherit",
                }}
                variant="contained"
                color="primary"
              >
                Request a Demo
              </Button>
              <Button
                sx={{
                  fontSize: 15,
                  bgcolor: "#000",
                  color: "#fff",
                  textTransform: "inherit",
                }}
                variant="contained"
              >
                Download Profile
              </Button>
            </Box>
          </Box>
        </Container>
        {/* heroSection peoples image */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Image src={enterpriseHero} alt="" />
        </Box>
      </div>
      {/*  */}
      <Box sx={{ mt: -20, mb: 6, px: 2 }}>
        <Container sx={{ py: 8, px: 12, bgcolor: "#000", borderRadius: 4 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 5 }}
              columns={{ xs: 2, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Box
                  sx={{ textAlign: "center", color: "#fff" }}
                  className={styles.enterpriseBox}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      color: "#fff",
                      mb: 2,
                    }}
                    variant="h4"
                  >
                    71%
                  </Typography>
                  <Typography variant="body1">
                    of Google Cloud certified individuals report that it enable
                    their employer to get more business
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    <StarIcon sx={{ color: "#909090" }} />
                    <Typography variant="body1">
                      Google Cloud whitepaper 2020
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Box
                  sx={{ textAlign: "center", color: "#fff" }}
                  className={styles.enterpriseBox}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      color: "#fff",
                      mb: 2,
                    }}
                    variant="h4"
                  >
                    $10,000
                  </Typography>
                  <Typography variant="body1">
                    Estimated ROI per credentialed employee added value per
                    certified employee
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    <StarIcon sx={{ color: "#909090" }} />
                    <Typography variant="body1">
                      Pearson VUE Report 2021
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Box
                  sx={{ textAlign: "center", color: "#fff" }}
                  className={styles.enterpriseBox}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 34, md: 40 },
                      fontWeight: 700,
                      color: "#fff",
                      mb: 2,
                    }}
                    variant="h4"
                  >
                    86%
                  </Typography>
                  <Typography variant="body1">
                    of IT leaders agreed that the shortage of qualified cloud
                    talent will slow down their projects in 2020
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      textAlign: "center",
                      my: 2,
                    }}
                  >
                    <StarIcon sx={{ color: "#909090" }} />
                    <Typography variant="body1">
                      logicworks Survey Report 2020
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
