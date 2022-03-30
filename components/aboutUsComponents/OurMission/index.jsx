import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../../styles/About.module.scss";
import professionalIcon from "../../../images/about/professional-icon.svg";
import questionIcon from "../../../images/about/question-icon.svg";
import contentIcon from "../../../images/about/content-icon.svg";
import Image from "next/image";

const OurMission = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#000", color: "#fff" }}>
        <Container sx={{ py: 6 }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: 22, md: 36 },
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
            }}
            variant="h3"
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mb: 2,
            }}
            variant="body1"
          >
            At QwikSkills, we believe that being prepared for something comes
            only by practicing effectively with good materials. Our founders,
            Varun Mahajan and Harit Verma struggled to find reliable practice
            tests to take before their certification exams.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              mb: 2,
            }}
            variant="body1"
          >
            They discovered a gap in the market for test platforms that offered
            engaging and high-quality practice tests to prepare candidates for
            their cloud certification exams. From that need, QwikSkills was
            born.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 6 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={3}>
              <Box sx={{ textAlign: { xs: "center", md: "inherit", mb: 2 } }}>
                <Typography
                  sx={{ fontSize: { xs: 22, md: 36 }, fontWeight: 700, mb: 2 }}
                  variant="h4"
                >
                  Secret <span className={styles.coloredText}>Recipe</span> to
                  Success
                </Typography>
                <Typography variant="body1">
                  QwikSkills is built from the processes we used ourselves.
                  Built to bring you the best exam preperation content you
                  deserve.{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  bgcolor: "#FFF2D6",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 0,
                  height: 1,
                }}
              >
                <Image src={professionalIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2 }}
                  variant="h5"
                >
                  Certified Professionals
                </Typography>
                <Typography variant="body1">
                  Certified professionals appear for these certifications before
                  creating the content.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  bgcolor: "#FFE7E7",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 0,
                  height: 1,
                }}
              >
                <Image src={questionIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2 }}
                  variant="h5"
                >
                  Question-Answer
                </Typography>
                <Typography variant="body1">
                  Our certified subject-matter experts curate questions and
                  in-depth answer explanations.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
              <Paper
                sx={{
                  bgcolor: "#E0FFDF",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: 0,
                  height: 1,
                }}
              >
                <Image src={contentIcon} alt="" />
                <Typography
                  sx={{ fontSize: 20, fontWeight: 700, my: 2 }}
                  variant="h5"
                >
                  Up-to-date Content
                </Typography>
                <Typography variant="body1">
                  We vet the content and keep it most up-to-date for you to be
                  ready - every time.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default OurMission;
